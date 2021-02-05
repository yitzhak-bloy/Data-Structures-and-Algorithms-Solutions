// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

// My solution 
const findFactorialRecursive = (number, answer = number) => {
  if (number === 1) {
    return answer;
  }
  answer = answer * (number - 1);
  number = number - 1;

  return findFactorialRecursive(number, answer);
}

const findFactorialIterative = (number) => {
  let answer = 1;

  for (let i = number; i > 1; i--) {
   answer = answer * i;
  }

  return answer;
}

findFactorialRecursive(5)
findFactorialIterative(5)


// another solution
function findFactorialRecursive(number) {
  if(number === 2) {
    return 2;
  }
  return number * findFactorialRecursive(number - 1)
}

findFactorialRecursive(5);
