import { Modal } from "../../components/modal/Modal";
import Templator from "../../core/templator/Temlator";

import { profile } from "./profile.tmlp";

const root = document.querySelector("#root");

const context = {};

const tmpl = new Templator(profile);
const renderedTemplate = tmpl.compile(context);
root.innerHTML = renderedTemplate;

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
