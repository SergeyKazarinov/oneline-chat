import Templator from "../../core/templator/Temlator";
import { register } from "./register.tmpl";

const root = document.querySelector("#root");

const context = {
  title: "Регистрация",
};

const tmpl = new Templator(register);
const renderedTemplate = tmpl.compile(context);
root.innerHTML = renderedTemplate;
