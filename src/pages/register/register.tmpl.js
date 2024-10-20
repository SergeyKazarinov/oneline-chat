import { button } from '../../components/button/button.tmpl';
import { input } from "../../components/input/input.tmpl";

export const register = (function () {
  return `
    <section class="register">
      <form id="register" class="form">
        <fieldset class="form__fieldset">
          <legend class="form__legend">{{ title }}</legend>
          <include template="{%${input}%}">
            {{
              "inputType": "email",
              "minLength": "4",
              "maxLength": "60",
              "id": "email",
              "name": "email",
              "placeholder": "Введите e-mail",
              "label": "E-mail",
              "required": "true"
            }}
          </include>
          <include template="{%${input}%}">
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
          <include template="{%${input}%}">
            {{
              "inputType": "text",
              "minLength": "2",
              "maxLength": "40",
              "id": "first_name",
              "name": "first_name",
              "placeholder": "Введите",
              "label": "Имя",
              "required": "true"
            }}
          </include>
          <include template="{%${input}%}">
            {{
              "inputType": "text",
              "minLength": "2",
              "maxLength": "40",
              "id": "second_name",
              "name": "second_name",
              "placeholder": "Введите",
              "label": "Фамилия",
              "required": "true"
            }}
          </include>
          <include template="{%${input}%}">
            {{
              "inputType": "phone",
              "minLength": "18",
              "maxLength": "18",
              "id": "phone",
              "name": "phone",
              "placeholder": "Введите",
              "label": "Телефон",
              "required": "true"
            }}
          </include>
          <include template="{%${input}%}">
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
          <include template="{%${input}%}">
            {{
                "inputType": "password",
                "minLength": "8",
                "maxLength": "40",
                "id": "password-again",
                "name": "password",
                "placeholder": "Введите",
                "label": "Пароль (ещё раз)",
                "required": "true"
              }}
          </include>
        </fieldset>
        <div class="form__button-container">
          <include template="{%${button}%}">
            {{
              "variant": "primary",
              "type": "submit",
              "name": "Зарегистрироваться"
            }}
          </include>
          <include template="{%${button}%}">
            {{
              "variant": "clear",
              "type": "button",
              "name": "Войти"
            }}
          </include>
        </div>
      </form>
    </section>
  `;
})();
