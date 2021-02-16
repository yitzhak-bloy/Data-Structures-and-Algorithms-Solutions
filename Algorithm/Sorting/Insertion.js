// My solution 
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const insertionSort = (array) => {
  let sortArr = []
  
  for (let i = 0; i < array.length; i++) {
    if (!sortArr.length || array[i] > sortArr[sortArr.length-1]) {
      sortArr.push(array[i])
    } else if (array[i] < sortArr[0]) {
      sortArr.unshift(array[i])
    } else {
      for (let x = 0; x < sortArr.length; x++) {
        if (array[i] > sortArr[x] && array[i] < sortArr[x+1]) {
          sortArr.splice(x+1, 0, array[i])
          break;  
        }
      }
    }
  }

  return sortArr
}

insertionSort(numbers);



// another solution
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  const length = array.length;
	for (let i = 0; i < length; i++) {
		if (array[i] < array[0]) {
      //move number to the first position
      array.unshift(array.splice(i,1)[0]);
    } else {
      // only sort number smaller than number on the left of it. This is the part of insertion sort that makes it fast if the array is almost sorted.
      if (array[i] < array[i-1]) {
        //find where number should go
        for (var j = 1; j < i; j++) {
          if (array[i] >= array[j-1] && array[i] < array[j]) {
            //move number to the right spot
            array.splice(j,0,array.splice(i,1)[0]);
          }
        }
      }
    }
	}
}

insertionSort(numbers);
console.log(numbers);
