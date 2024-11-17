export class Modal {
  constructor(selector) {
    this.modal = document.querySelector(selector);
    this.overlay = this.modal.querySelector(".modal__overlay");
    this.exitBtn = this.modal.querySelector("[data-js=exit]");
  }

  _handleKeydown = (e) => {
    if (e.key === "Escape") {
      this.closeModal();
    }
  };

  openModal = () => {
    this.modal.classList.add("modal_active");
    this.overlay.addEventListener("click", this.closeModal);
    this.exitBtn.addEventListener("click", this.closeModal);
    document.addEventListener("keydown", this._handleKeydown);
  };

  closeModal = () => {
    this.modal.classList.remove("modal_active");
    this.overlay.removeEventListener("click", this.closeModal);
    document.removeEventListener("keydown", this._handleKeydown);
  };
}
