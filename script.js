"use strict";
const nav = document.querySelector(".nav");
/*--------------- Navigation Bar Sticky Animation -----------------*/

/*--------------- Navigation Bar Mouse over and Mouse Out Animations -----------------*/

function highlightButton(event) {
  //Function highlights the user mouseovered button in the navigation bar in the header of the page by dimining the opacity of all its sibling elements

  //Select all elements in the navigation bar
  const buttonSelected = event.target;
  const buttons = event.target.closest(".nav").querySelectorAll(".btn");
  const links = buttonSelected.closest(".nav").querySelectorAll(".nav_link");
  const dividers = buttonSelected
    .closest(".nav")
    .querySelectorAll(".link_divider");

  //Dim opacity of dividers and links when button is selected
  dividers.forEach((divider) => (divider.style.opacity = 0.5));
  links.forEach((link) => (link.style.opacity = 0.5));

  //Set opacity of mouseovered button to 1, Dim opacity of non-mouseovered button to 0.5
  buttons.forEach((button) => {
    if (button === buttonSelected) {
      button.style.opacity = 1;
    } else {
      button.style.opacity = 0.5;
    }
  });
}

function highlightLink(event) {
  //Function highlights the user mouseovered link and adjacent dividers in the navigation bar in the header of the page by dimining the opacity of all its sibling elements

  //Selecting elments in the navigation bar
  const linkSelected = event.target;
  const links = linkSelected
    .closest(".nav_links")
    .querySelectorAll(".nav_link");
  const dividers = linkSelected
    .closest(".nav_links")
    .querySelectorAll(".link_divider");
  const buttons = linkSelected.closest(".nav").querySelectorAll("button");

  //dim all dividers and all buttons opacity
  dividers.forEach((divider) => (divider.style.opacity = 0.5));
  buttons.forEach((button) => (button.style.opacity = 0.5));

  //if the current link in links is the linkSelected then set the opacity of the divder to its left and right to 1, if its not dim its opacity
  links.forEach((link) => {
    if (link === linkSelected) {
      const dividerLeft = linkSelected.previousElementSibling;
      const dividerRight = linkSelected.nextElementSibling;
      dividerLeft.style.opacity = 1;
      dividerRight.style.opacity = 1;
      dividerLeft.style.color = "#8FCB9B";
      dividerRight.style.color = "#8FCB9B";
      linkSelected.style.color = "#8FCB9B";
    } else {
      link.style.opacity = 0.5;
    }
  });
}

function handleMouseOver(event) {
  if (event.target.classList.contains("nav_link")) highlightLink(event);
  if (event.target.classList.contains("btn")) highlightButton(event);
}

function handleMouseOut(event) {
  //if the mouseout target is a button or a link refresh all opacities of all elements in the navigation bar
  if (
    event.target.classList.contains("nav_link") ||
    event.target.classList.contains("btn")
  ) {
    //Selecting elements in navigation bar => links,buttons,dividers
    const elementSelected = event.target;
    const links = elementSelected.closest(".nav").querySelectorAll(".nav_link");
    const dividers = elementSelected
      .closest(".nav")
      .querySelectorAll(".link_divider");
    const buttons = elementSelected.closest(".nav").querySelectorAll("button");

    //Refresh all elements in navigation bars opacity to 1
    links.forEach((link) => {
      link.style.opacity = 1;
      link.style.color = "#ffffff";
    });
    dividers.forEach((divider) => {
      divider.style.opacity = 1;
      divider.style.color = "#ffffff";
    });
    buttons.forEach((button) => (button.style.opacity = 1));
  }
}

nav.addEventListener("mouseover", function (event) {
  handleMouseOver(event);
});

nav.addEventListener("mouseout", function (event) {
  handleMouseOut(event);
});

/*--------------- Media Toolbar -----------------*/
const media = document.querySelector(".media_container");

media.addEventListener("mouseover", function (event) {
  if (event.target.classList.contains("media_icon")) {
    const selectedIcon = event.target;
    const mediaIcons = event.target
      .closest(".media_container")
      .querySelectorAll(".media_icon");

    mediaIcons.forEach(function (mediaIcon) {
      if (selectedIcon !== mediaIcon) {
        mediaIcon.style.opacity = 0.5;
      }
    });
  }
});

media.addEventListener("mouseout", function (event) {
  if (event.target.classList.contains("media_icon")) {
    const mediaIcons = event.target
      .closest(".media_container")
      .querySelectorAll(".media_icon");

    mediaIcons.forEach((mediaIcon) => (mediaIcon.style.opacity = 1));
  }
});

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

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

/*--------------- Scroll Indicator -----------------*/

const scrollIndicator = document.querySelector(".scroll_container");
const aboutMeSection = document.querySelector(".aboutme_section");

//Callback function hidescrollindicator is triggered when the viewport is scrolled to the about me section. The function hides the scroll indicator. Then stops observer for this intersection.
const hideScrollIndicator = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  scrollIndicator.classList.add("hidden");
  observer.unobserve(entry.target);
};

//Creates about me section observer
let aboutMeSectionObserver = new IntersectionObserver(hideScrollIndicator, {
  root: null,
  threshold: 1,
});

aboutMeSectionObserver.observe(aboutMeSection);
