import lodash from 'lodash';

//Function takes 3 args
//itemsArray: Array with all elements to be paginated
//pageNumber: The current Pahe No
//pageSize: The size of each page
export function paginate(itemsArray, pageNumber, pageSize) {
	//ie::if current page is 2 and pageSize is 4
	//ie::Then the 5th element of array should be starting point
	//ie::index retuned should be 4===((2-1)*4)
	const startIndex = (pageNumber - 1) * pageSize;
	//with lodash we can chain the steps and dont have to write everything from scratch
	return lodash(itemsArray)
		.slice(startIndex) //first elem = elem at start index
		.take(pageSize)
		.value(); //executes chained sequence to extract unwrapped value
}
