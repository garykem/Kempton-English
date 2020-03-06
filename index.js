import "../css/styles.scss";
import { elements } from "./views/base";
import * as Quiz from "./models/Quiz";
import * as quizView from "./views/quizView";

let data = {
  index: 0,
  score: 0
};

function init() {
  elements.slides[data.index].style.display = "block";
  elements.dots[data.index].classList.add("active");
}
init();

elements.body.addEventListener("click", e => {
  if (e.target.matches(".hamburger")) {
    elements.navbar.classList.toggle("showList");
  }
  if (e.target.matches(".nav-item, .nav-item *")) {
    elements.navbar.classList.remove("showList");
  }

  elements.arrows.forEach((cur, i) => {
    if (e.target.matches(cur)) {
      ctrlMoveSlide(elements.arrowsCount[i]);
    }
  });
  elements.dotsClasses.forEach((cur, i) => {
    if (e.target.matches(`.${cur}`)) {
      ctrlJumpToSlide(elements.dotsCount[i]);
    }
  });
  if (e.target.matches(".check")) {
    e.preventDefault();
    controlScore();
  }
  elements.answersClasses.forEach((cur, i) => {
    if (e.target.matches(`.${cur}, .${cur} *`)) {
      elements.errorMessages[i].style.display = "none";
      let errMsgIndex = elements.errorMessages.findIndex(
        cur => cur.style.display === "block"
      );
      console.log(errMsgIndex);
      if (errMsgIndex === -1) {
        elements.note.style.display = "none";
      }
    }
  });
});

setInterval(() => {
  ctrlMoveSlide(1);
}, 6000);

function ctrlMoveSlide(n) {
  data.index = Quiz.updateIndex(data.index, n);
  quizView.displaySlide(data.index);
}

function ctrlJumpToSlide(n) {
  data.index = n;
  quizView.displaySlide(data.index);
}

function controlScore() {
  //get user answers
  let userAnswers = quizView.getInputs();

  //find index of first unchecked answers
  let nullIndex = nullIndexFinder(userAnswers);
  if (nullIndex === -1) {
    //give feedback (colored background, display correct answers for the wrong answers, and final comment)
    quizView.feedback(userAnswers);

    //calculate score
    data.score = Quiz.calculateScore(data.score, userAnswers);

    // display score
    quizView.displayScore(data.score);

    //display verdict statements
    quizView.displayVerdict(data.score);

    //disable check and radio buttons
    quizView.disabled();

    //display reset button
      quizView.displayResetBtn();
      
  } else {
    quizView.displayNoteAndErrMessages(userAnswers);
  }
}


function nullIndexFinder(userAnswers) {
  let nullIndex = userAnswers.findIndex(cur => cur === null);
  return nullIndex;
}










// const body = document.querySelector('body');
// // const inputs = Array.from(document.querySelectorAll('input')).map(cur => cur.name);
// const dataAnsTrue = Array.from(document.querySelectorAll('[data-answer = "true"]')).map(cur => cur.name);
// const correctAns = Array.from(document.querySelectorAll('.correctAns')).map(cur => cur.textContent);
// const errMssge = document.querySelectorAll('.errMessage');
// const inputs = Array.from(document.querySelectorAll(`input`)).map(cur=> cur.dataset.answer)

// console.log(inputs)

// body.addEventListener('click', e => {
//     if (e.target.matches('.check')) {
//         e.preventDefault();
//         controlScore();
//     }
// })

// function controlScore() {
//     //select checked elements
//     let checked = userInput();
//     // let errMessgeDisplayed = displayErrMessage(checked);

//     let nullIndex = findNullIndex(checked);
//     if (nullIndex !== -1) {
//         //
//     } else {
//         return '';
//     }
//     // console.log(errMessgeDisplayed);

// }

// function userInput() {
//     console.log(dataAnsTrue)
//     let elementsChecked = dataAnsTrue.map(cur => {
//         return document.querySelector(`[name=${cur}]:checked`);
//     })
//     console.log(elementsChecked)
//     return elementsChecked;
// }

// // function displayErrMessage(checked) {
// //     if (checked !== null) {

// //     }
// // }

// function findNullIndex(checked) {
//     let nullIndex = checked.findIndex(cur => cur === null);
//     console.log(nullIndex)
//     return nullIndex;
// }

// const inputNames = Array.from(document.querySelectorAll(`[data-answer = "true"]`)).map(cur => cur.name);
// let checked = inputNames.map(cur => {
//         return document.querySelector(`[name=${cur}]:checked`);
//     })

// console.log(inputNames)
//this gets an array of strings = ["A1", "A2", "A3", "A4",]

//i want the value that is attached to the inputs that each string represents

// const inputNames = Array.from(document.querySelectorAll(`[data-answer = "true"]`)).map(cur => cur.name)
//(give an array of ["A1", "A2","A3", "A4"]

// const inputNames = Array.from(document.querySelectorAll(`[id$="_a1"]`)).map(cur=> cur.name)  //this gets me the whole input with all the data in it
// console.log(inputNames)

// const inputs = Array.from(document.querySelectorAll('input')).map(cur=> cur.value);
// console.log(inputs)

// inputs.map(cur => {
//     return document.querySelectorAll(`[name=${cur}].value`)
// })

// body.addEventListener('click', e => {
//     if (e.target.matches('.check')) {
//         e.preventDefault();
//         controlScore();
//     }
// })

// function controlScore() {
//     let inputs = getInputs()
// }

// function getInputs() {
//     let inputsValue = inputNames.map(cur => {
//         let values = Array.from(document.querySelectorAll(`[name=${cur}]`))
//         .map(cur => cur.value);
//         console.log(values)
//         return values
//     })
//     //this gives the actual answers - the values
// }

// const inputValues = inputs.map(cur => cur.value)
// console.log(inputValues)

// let namesChecked = inputValues.map(cur => cur.checked)
// let namesChecked = inputValues.map(cur => {
//     return document.querySelector(`[name=${cur}]:checked`)
// })
// console.log(namesChecked)

// body.addEventListener('click', e => {
//     if (e.target.matches('.check')) {
//         e.preventDefault();
//         controlScore();
//     }
// })

// function controlScore() {
//     let ansChecked = getInputs();
//     console.log(ansChecked)
// }

// function getInputs() {
//     let checked = inputNames.map(cur => {
//         return document.querySelector(`[name=${cur}]:checked`);
//     })
//     console.log(checked)
//     return checked;
// }
