class Modal {
  modal: HTMLElement | null;

  overlay: HTMLElement | null | undefined;

  exitBtn: HTMLElement | null | undefined;

  constructor(selector: string) {
    this.modal = document.querySelector(selector);
    this.overlay = this.modal?.querySelector(".modal__overlay");
    this.exitBtn = this.modal?.querySelector("[data-js=exit]");
  }

  private handleKeydown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      this.closeModal();
    }
  };

  public openModal = () => {
    this.modal?.classList.add("modal_active");
    this.overlay?.addEventListener("click", this.closeModal);
    this.exitBtn?.addEventListener("click", this.closeModal);
    document.addEventListener("keydown", this.handleKeydown);
  };

  public closeModal = () => {
    this.modal?.classList.remove("modal_active");
    this.overlay?.removeEventListener("click", this.closeModal);
    document.removeEventListener("keydown", this.handleKeydown);
  };
}

export default Modal;
