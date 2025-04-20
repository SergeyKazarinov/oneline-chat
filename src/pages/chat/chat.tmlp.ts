import button from '../../components/ui-kit/button/button.tmpl';
import input from '../../components/ui-kit/input/input.tmpl';

const chatPage = (function () {
  return `
    <section class="chat">
      <div class="chat__aside">
        <div class="chat__aside-header">
          <div class="chat__aside-header-profile">
            <include src="{%${button}%}">
              {{
                "buttonType": "button",
                "variant": "secondary",
                "color": "secondary",
                "name": "Профиль",
                "dataJS": "profile"
              }}
            </include>
          </div>
        </div>
        <include src="{%${input}%}">
          {{
            "class": "chat__aside-search",
            "variant": "search",
            "placeholder": "Поиск",
            "inputType": "search",
            "name": "search",
            "label": "Поиск"
          }}
        </include>
        <div class="chat__aside-contacts">
          <ul class="chat__aside-contacts-list">
            <li class="chat__aside-contacts-list-item">
              <div class="chat__aside-contacts-list-item-avatar">
              </div>
              <span class="chat__aside-contacts-list-item-name">
                Имя
              </span>
              <span class="chat__aside-contacts-list-item-time">
                12:00
              </span>
              <span class="chat__aside-contacts-list-item-message">
                Сообщение
              </span>
              <span class="chat__aside-contacts-list-item-badge">
                1
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  `;
})();

export default chatPage;
