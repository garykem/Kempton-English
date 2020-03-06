import { elements } from './base';


//slideshow
export function displaySlide(index) {
	elements.slides.forEach((cur, i) => {
        cur.style.display = 'none';
        elements.dots[i].classList.remove('active');
    })
    elements.slides[index].style.display = 'block';
    elements.dots[index].classList.add('active');
}

//quiz
export function getInputs() {
    let userAnswers = elements.inputNames.map(cur => {
      return document.querySelector(`[name = ${cur}]:checked`);
    });
    return userAnswers;
}
  
export function feedback(userAnswers) {
    userAnswers.forEach((cur, i) => {
      if (cur.dataset.answer === "true") {
        cur.parentElement.classList.toggle("activeGreen");
        // cur.parentElement.style.backgroundColor = 'green';
        cur.style.color = "white";
      } else {
        cur.parentElement.classList.toggle("activeRed");
        // cur.parentElement.style.backgroundColor = 'red';
        elements.correctAns[i].style.display = "block";
      }
    });
}
  
export function displayScore(score) {
  elements.scoreHeading.style.display = "block";
  console.log(score)
//   const markup = `
//   Your score is: score / elements.correctAns.length;
// `;
  // elements.yourScore.innerHTML = `${score} / ${elements.correctAns.length}`;
  elements.yourScore.innerHTML = `${score} / ${elements.questionsLength}`;
  console.log(elements.correctAns.length)
  // elements.yourScore.insertAdjacentHTML('beforeend', markup);
}
  
export function disabled() {
    elements.checkBtn.disabled = "true";
    elements.allInputs.forEach(cur => (cur.disabled = "true"));
}
  
export function displayResetBtn() {
    elements.resetBtn.style.display = "block";
}
  
export function displayNoteAndErrMessages(userAnswers) {
    userAnswers.forEach((cur, i) => {
      if (cur === null) {
        elements.errorMessages[i].style.display = "block";
        elements.note.style.display = "block";
      }
    });
}
  
export function displayVerdict(score) {
    let potentialScores = [0, 1, 2, 3, 4];
    let verdictStatements = [
      "You really need to improve!",
      "There is room for improvement!",
      "Well, you're half way there.",
      "Oh, you almost scored top marks!",
      "Well done! Perfect score."
    ];
    potentialScores.forEach((cur, i) => {
      if (cur === score) {
        elements.verdict.style.display = "block";
        elements.verdict.innerHTML = verdictStatements[i];
      }
    });
  }