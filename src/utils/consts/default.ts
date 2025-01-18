// Глобальная переменная дефолтных значений

const INPUT_DEFAULT_VALUE = {
  inputType: "text",
  minLength: 0,
  maxLength: 255,
  label: "",
} as const;

const BUTTON_DEFAULT_VALUE = {
  buttonType: "button",
  color: "primary",
  name: "",
} as const;

export const USER_INFO_FIELD_VALUE = {
  key: "",
  value: "",
} as const;

export const GLOBAL_DEFAULT_VALUE: { [key: string]: string | number } = {
  variant: "primary",
  as: "div",
  class: "",
  dataJsS: "",
  ...INPUT_DEFAULT_VALUE,
  ...BUTTON_DEFAULT_VALUE,
  ...USER_INFO_FIELD_VALUE,
};
