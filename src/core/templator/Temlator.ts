import { GLOBAL_DEFAULT_VALUE } from "../../utils/consts/default";
import {
  DOUBLE_FIGURE_REGEXP,
  INCLUDE_REGEXP,
  INCLUDE_REPLACE_REGEXP,
  SRC_ATTRIBUTE_REGEXP,
  SRC_CONTENT_REGEXP,
  TEMPLATE_REGEXP,
  SRC_REPLACE_ATTRIBUTE_REGEXP,
} from "../../utils/consts/regexp";
import get from "../../utils/templator/get"

class Templator {
  private template: string;

  constructor(template: string) {
    this.template = template
  }

  /**
   * Компилирует шаблон
   *
   * @param {TContext} context - контекст
   * @returns {string} - скомпилированный шаблон
   */
  public compile(context: TContext): string {
    return this.compileTemplate(context);
  }

  /**
   * Преобразует данные из шаблона в JSON объект
   *
   * @param {string} includeData - строка с JSON
   * @returns {TContext} - объект
   */
  private static getContextJSON(includeData: string): string {
    if (!includeData) return "{}";

    return includeData.replace(DOUBLE_FIGURE_REGEXP, (match) =>
      match === "{{" ? "{" : "}"
    );
  }

  /**
   * Преобразует JSON в объект
   *
   * @param {JSON} localsString - строка с JSON
   * @returns {TContext} - объект
   */
  private static getObjectFromJSON(localsString: string): TContext {
    try {
      return JSON.parse(localsString);
    } catch (error) {
      console.error("Ошибка при парсинге JSON в теге <include>:", error);
      return {};
    }
  }

  /**
   *
   * Получает данные, которые находятся внутри тега <include> </include>
   *
   * @param {string} includeTag - тег <include>
   * @returns {string} - данные внутри тега <include>
   */
  private static getIncludeData(includeTag: string): string {
    const removedTemplateAtr = includeTag.replace(SRC_CONTENT_REGEXP, "");
    const includeData = removedTemplateAtr.replace(INCLUDE_REPLACE_REGEXP, "");
    return includeData.trim();
  }

  /**
   * Получает dom-ноду внутри аттрибута template тега <include template=...>
   *
   * @param {string} includeTag
   * @returns {string}
   */
  private static getTemplateNode(includeTag: string): string {
    const template = includeTag.match(SRC_ATTRIBUTE_REGEXP);

    return template
      ? template[0].replace(SRC_REPLACE_ATTRIBUTE_REGEXP, "")
      : "";
  }

  /**
   * Заменяет значения ключей шаблонов на значения объекта
   *
   * @param {string} template
   * @param {TContext} params - параметры из тега <include>
   * @returns {string} - тот же шаблон, но с подставленными значениями
   */
  private static applyParamsToTemplate(template: string, params: TContext): string {
    let tmpl = template;
    let matches = TEMPLATE_REGEXP.exec(template);

    while (matches) {
      if (matches[1]) {
        const tmplValue = matches[1].trim();
        const data = get(params, tmplValue, GLOBAL_DEFAULT_VALUE[tmplValue]);

        if (typeof data === "function") {
          (window as TWindow)[tmplValue] = data;
          tmpl = tmpl.replace(
            new RegExp(matches[0], "gi"),
            `window.${matches[1].trim()}()`
          );
        } else {
          tmpl = tmpl.replace(new RegExp(matches[0], "gi"), data as string);
        }
      }
      matches = TEMPLATE_REGEXP.exec(template);
    }

    return tmpl;
  }

  /**
   * Заменяет тег <include> на его содержимое
   *
   * @param {string} template - корневой шаблон
   * @param {string} includeTag - тег <include>
   * @returns {string} - корневой шаблон с замененным тегом <include>
   */
  private static compileInclude(template: string, includeTag: string): string {
    const includeData = Templator.getIncludeData(includeTag);
    const templateNode = Templator.getTemplateNode(includeTag);
    if (!templateNode) return '';

    const contextJSON = Templator.getContextJSON(includeData);
    const contextObject = Templator.getObjectFromJSON(contextJSON);
    const renderTemplate = Templator.applyParamsToTemplate(
      templateNode,
      contextObject
    );

    return template.replace(includeTag, renderTemplate);
  }

  /**
   *
   * @param {TContext} context
   * @returns {string}
   */
  private compileTemplate(context: TContext): string {
    let tmpl = this.template; // корневой шаблон в виде строки

    const includeMatches = tmpl.match(INCLUDE_REGEXP); // находим все инклюсдсы
    if (includeMatches) {
      includeMatches.forEach((includeTag) => {
        tmpl = Templator.compileInclude(tmpl, includeTag);
      });
    }

    return Templator.applyParamsToTemplate(tmpl, context);
  }
}

export default Templator;
