
const customSort = (arr, direction = 'smallToLarge') => {
  let oldArr = arr;
  let newArr = [];
  while(arr.length > 0){
    const minValue = direction === 'smallToLarge' ? Math.min(...oldArr) : Math.max(...oldArr);
    newArr.push(minValue);

    const valueIndex = oldArr.indexOf(minValue);
    oldArr.splice(valueIndex, 1)
  }

  return newArr
};

module.exports = customSort