"use strict";

/*--------------- Modal Window -----------------*/

const modal = document.querySelector(".modal");
const contactMeButton = document.querySelector(".contact_me_button");
const overlay = document.querySelector(".overlay");

contactMeButton.addEventListener("click", function () {
  modal.classList.remove("hidden");
});
