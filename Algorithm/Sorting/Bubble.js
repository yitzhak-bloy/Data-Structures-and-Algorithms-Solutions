// My solution 

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const bubbleSort = (array) => {

  for (let x = 0; x < array.length; x++) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i+1]) {
        let plus = array[i];
        let minus = array[i+1] 
        array[i] = minus
        array[i+1] = plus
      }
    }
  }

  return array
}

bubbleSort(numbers);
