// Глобальная переменная дефолтных значений

const INPUT_DEFAULT_VALUE = {
  inputType: 'text',
  minLength: 0,
  maxLength: 255,
}

const BUTTON_DEFAULT_VALUE = {
  buttonType: 'button'
}

export const GLOBAL_DEFAULT_VALUE = {
  variant: 'primary',
  ...INPUT_DEFAULT_VALUE,
  ...BUTTON_DEFAULT_VALUE,
}
