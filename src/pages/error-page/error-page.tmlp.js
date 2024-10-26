import { servicePage } from "../../components/service-page/service-page.tmpl";

export const errorPage = (function () {
  return `
    <include src="{%${servicePage}%}">
      {{
        "title": "500",
        "text": "Мы уже фиксим",
        "textLink": "Назад к чатам",
        "link": "/"
      }}
    </include>
  `;
})();
