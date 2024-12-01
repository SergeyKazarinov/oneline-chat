import Templator from "../../core/templator/Temlator";
import { login } from "./login.tmpl";

const root = document.querySelector("#root");

const context = {
  title: "Вход",
};

const tmpl = new Templator(login);
const renderedTemplate = tmpl.compile(context);
root.innerHTML = renderedTemplate;
