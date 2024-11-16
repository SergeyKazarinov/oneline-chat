// Глобальная переменная дефолтных значений

const INPUT_DEFAULT_VALUE = {
  inputType: "text",
  minLength: 0,
  maxLength: 255,
};

const BUTTON_DEFAULT_VALUE = {
  buttonType: "button",
  color: "primary",
  name: "",
};

export const USER_INFO_FIELD_VALUE = {
  key: "",
  value: "",
};

export const GLOBAL_DEFAULT_VALUE = {
  variant: "primary",
  as: "div",
  ...INPUT_DEFAULT_VALUE,
  ...BUTTON_DEFAULT_VALUE,
  ...USER_INFO_FIELD_VALUE,
};
