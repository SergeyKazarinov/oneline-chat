import Templator from "./core/templator/Temlator";
import { sum } from "./modules/sum";
import { login } from "./pages/login/login.tmpl";
import { notFound } from "./pages/not-found/not-found.tmlp";
import { register } from "./pages/register/register.tmpl";

const root = document.querySelector("#root");
root.textContent = sum(6, -1).toString();
const tmpl = new Templator(notFound);

const context = {
  title: "Вход",
};

const renderedTemplate = tmpl.compile(context); // Строка с html-вёрсткой
root.innerHTML = renderedTemplate; // Показался нужный результат
