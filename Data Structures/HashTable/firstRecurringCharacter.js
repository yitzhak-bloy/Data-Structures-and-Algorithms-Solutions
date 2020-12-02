//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

// My solution 
const firstRecurringCharacter = (input) => { 
  for (i = 0; i < input.length; i++) {
    for (x = 0; x < i; x++) {
      if (input[i] === input[x]) {
        return input[i];
      }
    }
  }
}

firstRecurringCharacter([2,5,1,2,3,5,1,2,4])
