export const elements = {
  body: document.querySelector('body'),
  navbar: document.querySelector('.navbar'),
  menuLinks: Array.from(document.querySelectorAll('.menu-link')),
  navItems: Array.from(document.querySelectorAll('.nav-item')),
  allInputs: Array.from(document.querySelectorAll('input')),
  inputNames: Array.from(document.querySelectorAll(`[data-answer = "true"]`)).map(cur => cur.name),
  errorMessages: Array.from(document.querySelectorAll('.errMessage')),
  testSec: document.querySelector(".test"),
  inputs: document.querySelectorAll('input[type="radio"]'),
  checkBtn: document.querySelector(".check"),
  // errMessages: Array.from(document.querySelectorAll(".errMessage")),
  questionsLength: Array.from(document.querySelectorAll('.question')).length,
  answers: Array.from(document.querySelectorAll("input")),
  correctAns: document.querySelectorAll(".correctAns"),
  answersClasses: Array.from(document.querySelectorAll(".answers")).map(cur=> cur.classList[1]),

  arrows: ['.prev', '.next'],
  arrowsCount: [-1, +1],
  slideshowContainer: document.querySelector('.slideshow-container'),
  slides: Array.from(document.querySelectorAll('.slide')),
  dots: Array.from(document.querySelectorAll('.dot')),
  dotsClasses: Array.from(document.querySelectorAll('.dot')).map(cur => cur.classList[1]),
  dotsCount: [0,1,2,3,4],
  dotsContainer: document.querySelectorAll('.dots-container'),

  yourScore: document.querySelector('.yourScore'),
  note: document.querySelector('.note'),
  resetBtn: document.querySelector('.resetBtn'),
  verdict: document.querySelector('.verdict'),
  scoreHeading: document.querySelector('.scoreHeading')

};
