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
import get from "../../utils/templator/get";

class Templator {
  private _template: string;
  constructor(template: string) {
    this._template = template;
  }

  /**
   * Компилирует шаблон
   *
   * @param {TContext} context - контекст
   * @returns {string} - скомпилированный шаблон
   */
  public compile(context: TContext): string {
    return this._compileTemplate(context);
  }

  /**
   * Преобразует данные из шаблона в JSON объект
   *
   * @param {string} includeData - строка с JSON
   * @returns {TContext} - объект
   */
  private _getContextJSON(includeData: string): string {
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
  private _getObjectFromJSON(localsString: string): TContext {
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
  private _getIncludeData(includeTag: string): string {
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
  private _getTemplateNode(includeTag: string): string {
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
  private _applyParamsToTemplate(template: string, params: TContext): string {
    let key = null;
    let tmpl = template;
    while ((key = TEMPLATE_REGEXP.exec(template))) {
      if (key[1]) {
        const tmplValue = key[1].trim();
        const data = get(params, tmplValue, GLOBAL_DEFAULT_VALUE[tmplValue]);
        if (typeof data === "function") {
          (window as TWindow)[tmplValue] = data;

          tmpl = tmpl.replace(
            new RegExp(key[0], "gi"),
            `window.${key[1].trim()}()`
          );
          continue;
        }

        tmpl = tmpl.replace(new RegExp(key[0], "gi"), data as string);
      }
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
  private _compileInclude(template: string, includeTag: string): string {
    const includeData = this._getIncludeData(includeTag);
    const templateNode = this._getTemplateNode(includeTag);
    if (!templateNode) return '';

    const contextJSON = this._getContextJSON(includeData);
    const contextObject = this._getObjectFromJSON(contextJSON);
    const renderTemplate = this._applyParamsToTemplate(
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
  private _compileTemplate(context: TContext): string {
    let tmpl = this._template; // корневой шаблон в виде строки

    const includeMatches = tmpl.match(INCLUDE_REGEXP); // находим все инклюсдсы
    if (includeMatches) {
      includeMatches.forEach((includeTag) => {
        tmpl = this._compileInclude(tmpl, includeTag);
      });
    }

    return this._applyParamsToTemplate(tmpl, context);
  }
}

export default Templator;
