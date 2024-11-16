import { avatar } from "../../components/ui-kit/avatar/avatar.tmpl";
import { backButton } from "../../components/ui-kit/back-button/back-button.tmpl";
import { button } from "../../components/ui-kit/button/button.tmpl";
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
                "name": "Изменить данные"
              }}
            </include>
          </li>
          <li class="profile__button-item">
            <include src="{%${button}%}">
              {{
                "variant": "clear",
                "name": "Изменить пароль"
              }}
            </include>
            </li>
            <li class="profile__button-item">
            <include src="{%${button}%}">
              {{
                "variant": "clear",
                "name": "Выйти",
                "color": "error"
              }}
            </include>
          </li>
      </ul>
    </section>

  </div>
  `;
})();
