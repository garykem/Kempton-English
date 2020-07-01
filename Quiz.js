import { elements } from '../views/base';

export function calcScore(checkedElements, score) {
	checkedElements.forEach(cur => {
		if (cur.dataset.answer === 'true') {
			score++;
		}
	});
	elements.checkBtn.disabled = true;
	elements.inputs.forEach(cur => cur.disabled = true);
	return score;
}

export function findingErrMsgIndex(){
	let errMsgIndex = elements.errMessages.findIndex(cur=>{	
		return cur.style.display === 'block';
	} );
	return errMsgIndex;
}
export function findIndexUnchecked(checkedElements) {
	return checkedElements.findIndex(cur => cur == null);
}


export function resetScore(score) {
	score = 0;	
	return score;
}