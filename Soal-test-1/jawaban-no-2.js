
const sortSmallToLarge = (arr) => {
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

const sortLargeToSmall = (arr) => {
  let newArr = [...arr];
  for (let i = 0; i < newArr.length; i++) {
    for (let j = i + 1; j < newArr.length; j++) {
      if (newArr[i] < newArr[j]) {
        let temp = newArr[i];
        newArr[i] = newArr[j];
        newArr[j] = temp;
      }
    }
  }
  return newArr;
};

module.exports = {
  sortSmallToLarge,
  sortLargeToSmall
};
