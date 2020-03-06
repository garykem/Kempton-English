import { elements } from '../views/base'; 

export function updateIndex(index, n) {
	index = index + n;
    if (index > elements.slides.length -1) {
        index = 0;
    } else if(index < 0){
        index = elements.slides.length - 1;
    }
    return index;
}


export function calculateScore(score, userAnswers) {
    userAnswers.forEach((cur) => {
      if (cur.dataset.answer === "true") {
          score++;
          console.log(score)
      }
    });
    return score;
  }



















// import {elements} from '../views/base';

// export function calcScore(answers, score){
// 	answers.forEach(cur=>{
// 			if(cur.checked === true && cur.dataset.answer==='true'){
//     score++;
// 	}
// 	});
// 	elements.btn.disabled = true;
// 	elements.inputs.forEach(cur=>cur.disabled=true)
// 	return score;
// }