const burger = document.querySelector(".burger");
const modalMenu = document.querySelector(".modal-menu-m");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  modalMenu.classList.toggle("active-modal");
});
