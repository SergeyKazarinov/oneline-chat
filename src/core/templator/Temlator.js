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
  constructor(template) {
    this._template = template;
  }

  compile(context) {
    return this._compileTemplate(context);
  }

  /**
   * Преобразует данные из шаблона в JSON объект
   *
   * @param {String} includeData
   * @returns {JSON}
   */
  _getContextJSON(includeData) {
    if (!includeData) return "{}";

    return includeData.replace(DOUBLE_FIGURE_REGEXP, (match) =>
      match === "{{" ? "{" : "}"
    );
  }

  /**
   * Преобразует JSON в объект
   *
   * @param {JSON} localsString
   * @returns {Object}
   */
  _getObjectFromJSON(localsString) {
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
   * @param {*} includeTag
   * @returns
   */
  _getIncludeData(includeTag) {
    const removedTemplateAtr = includeTag.replace(SRC_CONTENT_REGEXP, "");
    const includeData = removedTemplateAtr.replace(INCLUDE_REPLACE_REGEXP, "");
    return includeData.trim();
  }

  /**
   * Получает dom-ноду внутри аттрибута template тега <include template=...>
   *
   * @param {*} includeTag
   * @returns {*}
   */
  _getTemplateNode(includeTag) {
    const template = includeTag.match(SRC_ATTRIBUTE_REGEXP);

    return template
      ? template[0].replace(SRC_REPLACE_ATTRIBUTE_REGEXP, "")
      : "";
  }

  /**
   * Заменяет значения ключей шаблонов на значения объекта
   *
   * @param {string} template
   * @param {Object} params - параметры из тега <include>
   * @returns {string} - тот же шаблон, но с подставленными значениями
   */
  _applyParamsToTemplate(template, params) {
    const regExp = TEMPLATE_REGEXP;
    let key = null;
    let tmpl = template;
    while ((key = regExp.exec(template))) {
      if (key[1]) {
        const tmplValue = key[1].trim();
        const data = get(params, tmplValue, GLOBAL_DEFAULT_VALUE[tmplValue]);
        console.log(data);
        if (typeof data === "function") {
          window[tmplValue] = data;

          tmpl = tmpl.replace(
            new RegExp(key[0], "gi"),
            `window.${key[1].trim()}()`
          );
          continue;
        }

        tmpl = tmpl.replace(new RegExp(key[0], "gi"), data);
      }
    }

    return tmpl;
  }

  _compileInclude(template, includeTag) {
    const includeData = this._getIncludeData(includeTag);
    const templateNode = this._getTemplateNode(includeTag);
    if (!templateNode) return;

    const contextJSON = this._getContextJSON(includeData);
    const contextObject = this._getObjectFromJSON(contextJSON);
    const renderTemplate = this._applyParamsToTemplate(
      templateNode,
      contextObject
    );

    return template.replace(includeTag, renderTemplate);
  }

  _compileTemplate = (context) => {
    let tmpl = this._template; // корневой шаблон в виде строки

    const includeMatches = tmpl.match(INCLUDE_REGEXP); // находим все инклюсдсы
    if (includeMatches) {
      includeMatches.forEach((includeTag) => {
        tmpl = this._compileInclude(tmpl, includeTag);
      });
    }

    return this._applyParamsToTemplate(tmpl, context);
  };
}

export default Templator;
