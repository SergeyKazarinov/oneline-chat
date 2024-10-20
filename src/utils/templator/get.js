/**
 * Получение значения объекта по его ключу
 *
 * @param {*} obj - объект, в котором нужно найти значение
 * @param {*} path - ключ объекта. Если нужен вложенный ключ, передается через точечную нотацию
 * @param {*} defaultValue - значение по умолчанию, если переданный ключ undefined
 * @returns {*} значение объекта по ключу
 */
const get = (obj, path, defaultValue) => {
  const keys = path.split(".");

  let result = obj;

  for (let key of keys) {
    result = result[key];

    if (result === undefined) {
      return defaultValue;
    }
  }

  return result ?? defaultValue;
};

export default get;
