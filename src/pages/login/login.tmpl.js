import { input } from "../../components/input/input.tmpl";

export const login = (function () {
  return `
    <section class="login">
      <form id="login" class="form">
        <fieldset class="form__fieldset">
          <legend class="form__legend">{{ title }}</legend>
          <include template="{%${input}%}">
            {{
              "id": "login",
              "name": "login",
              "placeholder": "Введите",
              "label": "Логин"
            }}
          </include>
          <include template="{%${input}%}">
            {{
              "id": "password",
              "name": "password",
              "placeholder": "Введите",
              "label": "Пароль"
            }}
          </include>
        </fieldset>
        <button type="submit" class="form__button form__button_type_submit">
          Войти
        </button>
        <button type="button" class="form__button form__button_type_switch">
          Нет аккаунта?
        </button>
      </form>
    </section>
  `;
})();
