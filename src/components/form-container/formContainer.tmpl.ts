import { button } from "../ui-kit/button/button.tmpl";
import { input } from "../ui-kit/input/input.tmpl";

export const formContainer = (() => {
  return `
    <form id="login" class="form">
      <fieldset class="form__fieldset">
        <legend class="form__legend">{{ title }}</legend>
        <include template="{%${input}%}">
          {{
            "type": "text",
            "minLength": "2",
            "maxLength": "40",
            "id": "login-name",
            "name": "login",
            "placeholder": "Введите",
            "label": "Логин",
            "required": "true"
          }}
        </include>
        <include template="{%${input}%}">
        {{
            "type": "password",
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
        <include template="{%${button}%}">
          {{
            "variant": "primary",
            "type": "submit",
            "name": "Войти"
          }}
        </include>
        <include template="{%${button}%}">
          {{
            "variant": "clear",
            "type": "button",
            "name": "Нет аккаунта?"
          }}
        </include>
      </div>
    </form>`;
})();
