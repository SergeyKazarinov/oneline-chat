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
  const changePasswordBtn = document.querySelector("[data-js=change-password]");
  const avatarBtn = document.querySelector("[data-js=avatar-btn]");

  const profileModal = new Modal("[data-js=profile-modal-edit]");
  const passwordModal = new Modal("[data-js=profile-modal-password]");
  const avatarModal = new Modal("[data-js=profile-modal-avatar]");

  editBtn.addEventListener("click", profileModal.openModal);
  changePasswordBtn.addEventListener("click", passwordModal.openModal);
  avatarBtn.addEventListener("click", avatarModal.openModal);

  const avatarInput = document.querySelector("[data-js=avatar-input]");
  const fileName = document.querySelector("[data-js=file-name]");

  avatarInput.addEventListener("change", (e) => {
    fileName.textContent = e.target.value.replace(/.*\\/, "");
  });
});
