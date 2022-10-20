let arr = [4, 32, 2, 5, 8, 1];

const sortArr = (arr) => {
  let newArr = [...arr];

  for (let i = 0; i < newArr.length; i++) {
    for (let j = i + 1; j < newArr.length; j++) {
      if (newArr[i] > newArr[j]) {
        let temp = newArr[i];
        newArr[i] = newArr[j];
        newArr[j] = temp;
      }
    }
  }

  return newArr;
};

console.log(sortArr(arr));
console.log(arr);
