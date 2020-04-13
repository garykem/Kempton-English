export const elements = {
	
	nav: document.querySelector('.navbar'),
	body: document.querySelector('body'),

	slides: Array.from(document.querySelectorAll('.slide')),
	dots: document.querySelectorAll('.dot'),


	testimonials: document.querySelector('.testimonials'),
	testSec: document.querySelector('.test'),
	checkBtn: document.querySelector('.check'),
	errMessages: Array.from(document.querySelectorAll('.errMessage')),
	
	inputs: Array.from(document.querySelectorAll('input')),
	correctAns: document.querySelectorAll('.correctAns'),
	// numAnswers: correctAns.length,
	classAns: Array.from(document.querySelectorAll('.answers')).map(cur=> cur.classList[1]),
	nameAtt: Array.from(document.querySelectorAll('[data-answer="true"]')).map(cur=>cur.name),
	checkBtnContainer: document.querySelector('.check-btn-container'),
	test: document.querySelector('.test'),
	note: document.querySelector('.note'),
	yourScore: document.querySelector('.yourScore'),
	labelGroups:Array.from(document.querySelectorAll('[data-answer="true"]')).map(cur=>cur.parentElement.classList[0]),
	scoreContainer: document.querySelector('.scoreContainer'),
	scoreHeading: document.querySelector('.scoreHeading'),
	resetBtn: document.querySelector('.resetBtn'),
	reset: document.querySelector('.reset'),
	arrowClasses: ['.prev', '.next'],
	args1: [-1, +1],
	args2: [0, 1, 2, 3, 4],
	comments:['Oh dear...very bad!','Well, at least you got one right!','Okay, that\'s not too bad!','Not bad at all!','The perfect score. Well done!'],
	scoresArray: [0, 1, 2, 3, 4],
	commentContainer: document.querySelector('.verdict'),
	dotsClasses: Array.from(document.querySelectorAll('.dot')).map(cur=> cur.classList[1])
}
