"use strict";

/* -------------------------------------------------
   1) SCROLL-OBSERVER: Tildel .show-animate ved scroll
--------------------------------------------------- */
const sections = document.querySelectorAll("section");

// Overvåg scroll og aktiver .show-animate på sektioner
window.onscroll = () => {
  sections.forEach((sec) => {
    const scrollDistance = window.scrollY;
    const secDistance = sec.offsetTop;

    if (scrollDistance >= secDistance) {
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });
};

/* -------------------------------------------------
   2) HOVER-EFFEKT PÅ FØRSTE SEKTION (eksempel)
--------------------------------------------------- */
const sectionOne = document.querySelector(".sec1");

if (sectionOne) {
  sectionOne.addEventListener("mouseover", function () {
    this.classList.add("scale");
  });

  sectionOne.addEventListener("mouseout", function () {
    this.classList.remove("scale");
  });
}

/* -------------------------------------------------
   3) OPGAVE: KLIK-EFFEKTER (SEC5)
   Her skal du aktivere animationerne for dyrebillederne
   via klik. Brug classList.toggle(...) som i eksemplet.
--------------------------------------------------- */

/* Hund */
const dogElem = document.getElementById("dogElem");
if (dogElem) {
  dogElem.addEventListener("click", function () {
    this.classList.toggle("anim-scale");
    soundDog.play();
  });
}

/* Isbjørn */
const bearElem = document.getElementById("bearElem");
if (bearElem) {
  bearElem.addEventListener("click", function () {
    this.classList.toggle("anim-rotate");
    soundBear.play();
  });
}

/* Hest */
const horseElem = document.getElementById("horseElem");
if (horseElem) {
  horseElem.addEventListener("click", function () {
    this.classList.toggle("anim-skew");
    soundHorse.play();
  });
}

/* Selvvalgt dyr */
const lionElem = document.getElementById("lionElem");
if (lionElem) {
  lionElem.addEventListener("click", function () {
    this.classList.toggle("anim-pop");
    soundLion.play();
  });
}

/* Lydeffekter til dyrene */
const soundDog = new Audio();
soundDog.src = "../sound/dog.mp3";

const soundHorse = new Audio();
soundHorse.src = "../sound/horse.mp3";

const soundBear = new Audio();
soundBear.src = "../sound/bear.mp3";

const soundLion = new Audio();
soundLion.src = "../sound/lion.mp3";
