"use strict";

/*--------------- Modal Window -----------------*/

const modal = document.querySelector(".modal");
const contactMeButton = document.querySelector(".contact_me_button");
const overlay = document.querySelector(".overlay");
const closeModalButtton = document.querySelector(".close-modal");
const submitButton = document.querySelector(".send-button");

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

contactMeButton.addEventListener("click", function () {
  openModal();
});

closeModalButtton.addEventListener("click", function () {
  closeModal();
});

overlay.addEventListener("click", function () {
  closeModal();
});

submitButton.addEventListener("click", function (e) {
  e.preventDefault();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
