import { DOUBLE_FIGURE_REGEXP, INCLUDE_REGEXP, INCLUDE_REPLACE_REGEXP, TEMPLATE_ATTRIBUTE_REGEXP, TEMPLATE_CONTENT_REGEXP, TEMPLATE_REGEXP, TEMPLATE_REPLACE_ATTRIBUTE_REGEXP } from "../../utils/consts/regexp";
import get from "../../utils/templator/get";

class Templator {
  constructor(template) {
    this._template = template;
  }

  compile(context) {
    return this._compileTemplate(context);
  }

  _loadTemplate = async (url) => {
    const response = await fetch(url);
    if (response.ok) {
      return await response.text();
    } else {
      throw new Error(`Не удалось загрузить шаблон: ${url}`);
    }
  };


  /**
   * Преобразует данные из шаблона в JSON объект
   *
   * @param {String} includeData
   * @returns {JSON}
   */
  _getContextJSON(includeData) {
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
    const removedTemplateAtr = includeTag.replace(TEMPLATE_CONTENT_REGEXP, '');
    const includeData = removedTemplateAtr.replace(INCLUDE_REPLACE_REGEXP, '');
    return includeData.trim();
  }


  /**
   * Получает dom-ноду внутри аттрибута template тега <include template=...>
   *
   * @param {*} includeTag
   * @returns {*}
   */
  _getTemplateNode(includeTag) {
    const template = includeTag.match(TEMPLATE_ATTRIBUTE_REGEXP);

    return template ? template[0].replace(TEMPLATE_REPLACE_ATTRIBUTE_REGEXP, '') : '';
  }


  /**
   * Заменяет значения ключей шаблонов на значения объекта
   *
   * @param {string} template
   * @param {Object} params - параметры из тега <include>
   * @returns {string} - тот же шаблон, но с подставленными значениями
   */
  _applyParamsToTemplate(template, params) {
    let renderedTemplate = template;
    for (const key in params) {
      const atr = new RegExp(`{{\\s*${key}\\s*}}`, "g");
      renderedTemplate = renderedTemplate.replace(atr, params[key]);
    }
    return renderedTemplate;
  }

  _compileTemplate = (context) => {
    let tmpl = this._template; // корневой шаблон в виде строки

    const includeMatches = tmpl.match(INCLUDE_REGEXP); // находим все инклюсдсы

    if (includeMatches) {
      includeMatches.forEach((includeTag) => {
        console.log(includeTag)
        const includeData = this._getIncludeData(includeTag);
        const templateNode = this._getTemplateNode(includeTag);
        if (!templateNode) return;

        const contextJSON = this._getContextJSON(includeData);
        console.log(templateNode)
        const contextObject = this._getObjectFromJSON(contextJSON);
        const renderTemplate = this._applyParamsToTemplate(
          templateNode,
          contextObject
        );
        tmpl = tmpl.replace(includeTag, renderTemplate);
      });
    };

    let key = null;
    const regExp = TEMPLATE_REGEXP;

    while ((key = regExp.exec(tmpl))) {
      if (key[1]) {
        const tmplValue = key[1].trim();
        const data = get(context, tmplValue);
        tmpl = tmpl.replace(new RegExp(key[0], "gi"), data);
      }
    }

    return tmpl;
  };
}

export default Templator;
