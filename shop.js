(() => {
    const refs = {
      openModalBtn: document.querySelector("[shop-modal-open]"),
      closeModalBtn: document.querySelector("[shop-modal-close]"),
      modal: document.querySelector("[shop-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();