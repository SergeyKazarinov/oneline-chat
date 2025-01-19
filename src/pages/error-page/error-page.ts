import Templator from "../../core/templator/Temlator";
import errorPage from "./error-page.tmlp";

const root = document.querySelector("#root");

if (!root) {
  throw new Error("root not found");
}

const context = {};

const tmpl = new Templator(errorPage);
const renderedTemplate = tmpl.compile(context);
root.innerHTML = renderedTemplate;
