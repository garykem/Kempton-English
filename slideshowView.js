import {elements} from './base';

export function displaySlide(index){
	elements.slides.forEach((cur, i) => {
		cur.style.display = 'none';
		elements.dots[i].classList.remove('active');
	})
	

	elements.slides[index].style.display = 'block';
	elements.dots[index].classList.add('active');
	
}

