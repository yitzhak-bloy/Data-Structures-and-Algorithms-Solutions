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
