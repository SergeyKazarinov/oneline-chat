import Templator from "./core/templator/Temlator";
import errorPage from "./pages/error-page/error-page.tmlp";
import login from "./pages/login/login.tmpl";
import notFound from "./pages/not-found/not-found.tmlp";
import profile from "./pages/profile/profile.tmlp";
import register from "./pages/register/register.tmpl";

const root = document.querySelector("#root");

if (!root) {
  throw new Error("root not found");
}

const context = {
  title: "Вход",
};

let page;

const path = window.location.pathname;

switch (path) {
  case "/":
    page = profile;
    break;
  case "/login":
    page = login;
    break;
  case "/register":
    page = register;
    break;
  case "/error":
    page = errorPage;
    break;
  default:
    page = notFound;
}

const tmpl = new Templator(page);
const renderedTemplate = tmpl.compile(context); // Строка с html-вёрсткой
root.innerHTML = renderedTemplate; // Показался нужный результат
