//exercicio2
const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

test('remove element item', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    // expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);// como verifica se não sofreu alterações?
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  }); 