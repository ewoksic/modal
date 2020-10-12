class Modal {
  constructor() {
    this.modalBtn = document.querySelector(".modal-btn");
    this.modal = document.querySelector(".modal-overlay");
    this.closeBtn = document.querySelector(".close-btn");
    this.events();
  }
  events() {
    this.modalBtn.addEventListener("click", () => this.openModal());
    this.closeBtn.addEventListener("click", () => this.closeModal());
  }

  openModal() {
    this.modal.classList.add("open-modal");
  }
  closeModal() {
    this.modal.classList.remove("open-modal");
  }
}

export default Modal;
