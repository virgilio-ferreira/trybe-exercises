//exercicio4
const assert = require('assert');
const { hasUncaughtExceptionCaptureCallback } = require('process');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui

test ('myFizzBuzz', () => {
  expect(myFizzBuzz(30)).toEqual('fizzbuzz');
  expect(myFizzBuzz(9)).toEqual('fizz');
  expect(myFizzBuzz(10)).toEqual('buzz');
  expect(myFizzBuzz('banana')).toEqual(false);
  expect(myFizzBuzz('banana')).toEqual(false);
  expect(myFizzBuzz(true)).toEqual(false);
  expect(myFizzBuzz(false)).toEqual(false);
  expect(myFizzBuzz({What:true})).toEqual(false);
})