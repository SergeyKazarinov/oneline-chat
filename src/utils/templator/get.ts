/**
 * Получение значения объекта по его ключу
 *
 * @param {TContext} obj - объект, в котором нужно найти значение
 * @param {string} path - ключ объекта. Если нужен вложенный ключ, передается через точечную нотацию
 * @param {string | number | boolean | Function} defaultValue - значение по умолчанию, если переданный ключ undefined
 * @returns {unknown} значение объекта по ключу
 */
const get = (
  obj: TContext,
  path: string,
  defaultValue: string | number | boolean
) => {
  const keys = path.split(".");

  let result = obj;
  // eslint-disable-next-line no-restricted-syntax
  for (const key of keys) {
    result = result[key] as TContext;

    if (result === undefined) {
      return defaultValue;
    }
  }

  return result ?? defaultValue;
};

export default get;
