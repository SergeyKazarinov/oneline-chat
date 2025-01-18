export function sum(...args: number[]) {
  if (args.length === 0) {
    throw Error("аргумент должен содержать хотя бы одно число");
  }

  return args.reduce((result, current) => result + current, 0);
}
