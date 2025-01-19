import button from "../../components/ui-kit/button/button.tmpl";
import input from "../../components/ui-kit/input/input.tmpl";

const login = (function() {
  return `
    <section class="login">
      <form id="login" class="form">
        <fieldset class="form__fieldset">
          <legend class="form__legend">{{ title }}</legend>
          <include src="{%${input}%}">
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
          <include src="{%${input}%}">
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
          <include src="{%${button}%}">
            {{
              "variant": "primary",
              "buttonType": "submit",

              "name": "Войти"
            }}
          </include>
          <include src="{%${button}%}">
            {{
              "variant": "clear",
              "color": "clear",
              "buttonType": "button",
              "name": "Нет аккаунта?"
            }}
          </include>
        </div>
      </form>
    </section>
  `;
})();

export default login;
