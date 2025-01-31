import Templator from "../../core/templator/Temlator";
import { notFound } from "./not-found.tmlp";

const root = document.querySelector("#root");

const context = {};

const tmpl = new Templator(notFound);
const renderedTemplate = tmpl.compile(context);
root.innerHTML = renderedTemplate;
