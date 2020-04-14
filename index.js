import '../css/styles.scss';
import { elements } from './views/base';
import * as quiz from './models/Quiz';
import * as quizView from './views/quizView';
import * as slideshow from './models/Slideshow';
import * as slideshowView from './views/slideshowView';

const data = {
	index: 0,
	score: 0
};

//code for the navbar
function controlToggle() {
	elements.nav.classList.toggle('showList');
}
// let togClasses = Array.from(document.querySelectorAll('.toggle')).map(cur=> cur.classList);
// console.log({togClasses})
// console.log({elements})
elements.body.addEventListener('click', (e) => {
	//event listeners for navbar	
	if (e.target.matches('.toggle')) {
		controlToggle();
	}

	// event listeners for slideshow	
	elements.arrowClasses.forEach((cur, i) => {
		if (e.target.matches(cur)) {
			controlMoveSlides(elements.args1[i])
		}
	})
	elements.dotsClasses.forEach((cur, i) => {
		if (e.target.matches(`.${cur}`)) {
			controlShowSlide(elements.args2[i])
		}
	});

	//event listeners for quiz
	if (e.target.matches('.check,.check *')) {
		e.preventDefault();
		testControl();

	}

	if (e.target.matches('.resetBtn,.resetBtn *')) {
		resetControl();
	}
	
	elements.labelGroups.forEach((cur, i) => {
		if (e.target.matches(`.${cur}, .${cur} *`)) {
			errMsg_noteControl(i);
		}
	})

});


//code for the slideshow

const init = (() => {
	elements.slides[data.index].style.display = 'block';
	elements.dots[data.index].classList.add('active');
})();

setInterval(() => {
	controlMoveSlides(1);
}, 6000)

function controlMoveSlides(n) {
	data.index = slideshow.updateIndex(data.index, n);	
	slideshowView.displaySlide(data.index);
}

function controlShowSlide(n) {
	data.index = slideshow.resetIndex(data.index, n);
	slideshowView.displaySlide(data.index);
}


//code for the test

function errMsg_noteControl(ind) {
	quizView.deleteErrMsgs(ind);
	let errMsgIndex= quiz.findingErrMsgIndex()
	quizView.deleteNote(errMsgIndex);
}



function testControl() {

	let checkedElements = quizView.getInput();
	
	let indexUnchecked = quiz.findIndexUnchecked(checkedElements);
	
	if (indexUnchecked === -1) {
		data.score = quiz.calcScore(checkedElements, data.score);
		console.log(checkedElements)
		quizView.feedback(checkedElements);
		quizView.displayScore(data.score);
		quizView.displayComment(data.score);
		// quizView.displayCorrectAnswer(checkedElements);
		quizView.displayResetBtn();

	} else {
		checkedElements.forEach((cur, i) => {
			if (cur === null) {
				quizView.displayErrMsgs(i)
			}
		});
		quizView.displayNote();
	}

}


function resetControl(){
	data.score = quiz.resetScore(data.score);
	quizView.resetUi()
}