import { elements } from '../views/base';

export function updateIndex(index, n) {
	index = index + n;
	if (index >= elements.slides.length) {
		index = 0;
	} else if (index < 0) {
		index = elements.slides.length - 1;
	}
	return index;
}

// export function resetIndex(index, n) {
// 	index += n;
// 	return index;
// }