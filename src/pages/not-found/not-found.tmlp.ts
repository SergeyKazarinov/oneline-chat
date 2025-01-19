import servicePage from "../../components/service-page/service-page.tmpl";

const notFound = (function() {
  return `
    <include src="{%${servicePage}%}">
      {{
        "title": "404",
        "text": "Такой страницы не существует",
        "textLink": "Назад к чатам",
        "link": "/"
      }}
    </include>
  `;
})();

export default notFound;
