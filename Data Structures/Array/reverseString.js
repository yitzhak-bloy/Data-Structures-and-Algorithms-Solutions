// my solution
const reverse = (str) => {
  const arr = str.split("");
  let newArr = [];

  arr.forEach(
    (item) => {
    newArr.unshift(item);
  })

  return newArr.join('')
}

reverse('i am str')




//Other solutions
function reverse(str){
  if(!str || typeof str != 'string' || str.length < 2 ) return str;
  
  const backwards = [];
  const totalItems = str.length - 1;
  for(let i = totalItems; i >= 0; i--){
    backwards.push(str[i]);
  }
  return backwards.join('');
}

function reverse2(str){
  //check for valid input
  return str.split('').reverse().join('');
}

const reverse3 = str => [...str].reverse().join('');
