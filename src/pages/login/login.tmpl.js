import { button } from "../../components/button/button.tmpl";
import { input } from "../../components/input/input.tmpl";

export const login = (function () {
  return `
    <section class="login">
      <form id="login" class="form">
        <fieldset class="form__fieldset">
          <legend class="form__legend">{{ title }}</legend>
          <include scr="{%${input}%}">
            {{
              "inputType": "text",
              "minLength": "2",
              "maxLength": "40",
              "id": "login-name",
              "name": "login",
              "placeholder": "Введите",
              "label": "Логин",
              "required": "true"
            }}
          </include>
          <include scr="{%${input}%}">
          {{
              "inputType": "password",
              "minLength": "8",
              "maxLength": "40",
              "id": "password",
              "name": "password",
              "placeholder": "Введите",
              "label": "Пароль",
              "required": "true"
            }}
          </include>
        </fieldset>
        <div class="form__button-container">
          <include scr="{%${button}%}">
            {{
              "variant": "primary",
              "type": "submit",
              "name": "Войти"
            }}
          </include>
          <include scr="{%${button}%}">
            {{
              "variant": "clear",
              "type": "button",
              "name": "Нет аккаунта?"
            }}
          </include>
        </div>
      </form>
    </section>
  `;
})();
