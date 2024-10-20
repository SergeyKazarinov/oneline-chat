import { input } from "../../components/input/input.tmpl";
import { test } from "./test.tmpl";

export const login = (function () {
  return `
  <include template="{%${input}%}">
    {{
      "id": "login",
      "name": "login",
      "placeholder": "Введите",
      "label": "Логин"
    }}
  </include>
    <section class="login">
      <form id="login" class="form">
        <fieldset class="form__fieldset">
          <legend class="form__legend">{{ title }}</legend>
          <div class="form__input-wrapper">
            <input
              class="form__input"
              id="login"
              name="login"
              placeholder="Введите"
              autocomplete="off"
            />
            <label class="form__label" for="login"> Логин </label>
          </div>
          <div class="form__input-wrapper">
            <input
              class="form__input"
              id="password"
              name="password"
              placeholder="Введите"
              autocomplete="off"
            />
            <label class="form__label" for="password"> Пароль </label>
          </div>
        </fieldset>
        <button type="submit" class="form__button form__button_type_submit">
          Войти
        </button>
        <button type="button" class="form__button form__button_type_switch">
          Нет аккаунта?
        </button>
      </form>
      <include template="{%${test}%}">{{ "test": "тест" }}</include>
    </section>
  `;
})();
