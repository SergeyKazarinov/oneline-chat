import { Modal } from "./components/modal/Modal";
import Templator from "./core/templator/Temlator";
import { sum } from "./modules/sum";
import { errorPage } from "./pages/error-page/error-page.tmlp";
import { login } from "./pages/login/login.tmpl";
import { notFound } from "./pages/not-found/not-found.tmlp";
import { profile } from "./pages/profile/profile.tmlp";
import { register } from "./pages/register/register.tmpl";

const root = document.querySelector("#root");
const tmpl = new Templator(profile);

const context = {
  title: "Вход",
};

const renderedTemplate = tmpl.compile(context); // Строка с html-вёрсткой
root.innerHTML = renderedTemplate; // Показался нужный результат

document.addEventListener("DOMContentLoaded", () => {
  const editBtn = document.querySelector("[data-js=change-data]");
  const changePasswordBtn = document.querySelector(
    "[data-js=change-password  ]"
  );
  const profileModal = new Modal("[data-js=profile-modal-edit]");
  const passwordModal = new Modal("[data-js=profile-modal-password]");

  editBtn.addEventListener("click", profileModal.openModal);
  changePasswordBtn.addEventListener("click", passwordModal.openModal);
});
