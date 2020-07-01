export const elements = {
	nav: document.querySelector('.navbar'),
	body: document.querySelector('body'),

	slides: Array.from(document.querySelectorAll('.slide')),
	arrowClasses: ['.prev', '.next'],
	args1: [-1, +1],
	args2: [0, 1, 2, 3, 4],
	dots: document.querySelectorAll('.dot'),
	dotsClasses: Array.from(document.querySelectorAll('.dot')).map(cur => cur.classList[1]),
	
	testimonials: document.querySelector('.testimonials'),
	testSec: document.querySelector('.test'),
	checkBtn: document.querySelector('.check'),
	errMessages: Array.from(document.querySelectorAll('.errMessage')),
	questions:Array.from(document.querySelectorAll('.question')),
	inputs: Array.from(document.querySelectorAll('input')),
	correctAns: document.querySelectorAll('.correctAns'),
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
	comments:['Oh dear... you really need to get this book!','Well, at least you got one right!','Okay, that\'s not too bad!','Not bad at all!','The perfect score. Well done!'],
	scoresArray: [0, 1, 2, 3, 4],
	commentContainer: document.querySelector('.verdict')

}
