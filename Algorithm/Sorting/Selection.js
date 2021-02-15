// My solution 
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const selectionSort = (array) => {
  const length = array.length;
  
  let newArr = [];
  for (let i = 0; i < length; i++) {
    const min = Math.min(...array);
    newArr.push(min);
    array = array.filter(e => e !== min);
  }

  return newArr;
}

selectionSort(numbers);


// another solution
function selectionSort(array) {
  const length = array.length;
  for(let i = 0; i < length; i++){
    // set current index as minimum
    let min = i;
    let temp = array[i];
    for(let j = i+1; j < length; j++){
      if (array[j] < array[min]){
        //update minimum if current is lower that what we had previously
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}

selectionSort(numbers);
console.log(numbers);
