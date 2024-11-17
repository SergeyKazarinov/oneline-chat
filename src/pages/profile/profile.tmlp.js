import { avatar } from "../../components/ui-kit/avatar/avatar.tmpl";
import { backButton } from "../../components/ui-kit/back-button/back-button.tmpl";
import { button } from "../../components/ui-kit/button/button.tmpl";
import { input } from "../../components/ui-kit/input/input.tmpl";
import { userInfoField } from "../../components/user-info-field/user-info-field.tmpl";

export const profile = (function () {
  return `
  <div class="profile">
    <include src="{%${backButton}%}"></include>

    <section class="profile__container">
      <include src="{%${avatar}%}"></include>
      <h2 class="profile__title">Иван</h2>
      <ul class="profile__info">
        <include src="{%${userInfoField}%}">
          {{
            "as": "li",
            "key": "Почта",
            "value": "test@test.test"
          }}
        </include>
        <include src="{%${userInfoField}%}">
          {{
            "as": "li",
            "key": "Логин",
            "value": "ivanivanov"
          }}
        </include>
        <include src="{%${userInfoField}%}">
          {{
            "as": "li",
            "key": "Имя",
            "value": "Иван"
          }}
        </include>
        <include src="{%${userInfoField}%}">
          {{
            "as": "li",
            "key": "Фамилия",
            "value": "Иванов"
          }}
        </include>
        <include src="{%${userInfoField}%}">
          {{
            "as": "li",
            "key": "Имя в чате",
            "value": "Иван"
          }}
        </include>
        <include src="{%${userInfoField}%}">
          {{
            "as": "li",
            "key": "Телефон",
            "value": "+ 7 (909) 967 30 30"
          }}
        </include>
      </ul>

      <ul class="profile__buttons">
          <li class="profile__button-item">
            <include src="{%${button}%}">
              {{
                "variant": "clear",
                "color": "clear",
                "name": "Изменить данные",
                "dataJS": "change-data"
              }}
            </include>
          </li>
          <li class="profile__button-item">
            <include src="{%${button}%}">
              {{
                "variant": "clear",
                "color": "clear",
                "name": "Изменить пароль",
                "dataJS": "change-password"
              }}
            </include>
            </li>
            <li class="profile__button-item">
            <include src="{%${button}%}">
              {{
                "variant": "clear",
                "name": "Выйти",
                "color": "error",
                "dataJS": "exit"
              }}
            </include>
          </li>
      </ul>
    </section>

    <section class="profile__modal modal">
      <div class="modal__overlay"></div>
      <form class="profile__edit-container modal__container">
        <fieldset class="form__fieldset">
          <legend class="profile__edit-title form__legend">Редактировать профиль</legend>
          <include src="{%${input}%}">
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
        <include src="{%${input}%}">
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
          <include src="{%${input}%}">
            {{
              "inputType": "text",
              "minLength": "1",
              "maxLength": "18",
              "id": "nick",
              "name": "nick",
              "placeholder": "Введите",
              "label": "Имя в чате",
              "required": "true"
            }}
          </include>
          <include src="{%${input}%}">
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
        </fieldset>
      <div class="profile__button-container">
          <include src="{%${button}%}">
            {{
              "class": "profile__btn_submit",
              "variant": "primary",
              "buttonType": "submit",
              "dataJS": "submit",
              "name": "Сохранить"
            }}
          </include>
          <include src="{%${button}%}">
            {{
              "class": "profile__btn_exit",
              "variant": "clear",
              "color": "error",
              "buttonType": "button",
              "dataJS": "exit",
              "name": "Закрыть"
            }}
          </include>
        </div>
      </form>
    </section>

  </div>
  `;
})();
