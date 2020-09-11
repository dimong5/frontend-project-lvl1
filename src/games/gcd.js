import pairs from '@hexlet/pairs';
import engine from '../engine.js';
import { getRandom } from '../utils.js';

const { cons, car, cdr } = pairs;
const findSmallerNumber = (num1, num2) => {
  let smallerNumber;
  let biggerNumber;
  if (num1 < num2) {
    smallerNumber = num1;
    biggerNumber = num2;
  } else {
    smallerNumber = num2;
    biggerNumber = num1;
  }
  return cons(smallerNumber, biggerNumber);
};

const rules = 'Find the greatest common divisor of given numbers.';
const gcd = () => {
  const firstNumber = getRandom(1, 50);
  const secondNumber = getRandom(1, 50);
  const currentQuestion = `${firstNumber} ${secondNumber}`;
  let currentAnswer;
  if (firstNumber === secondNumber) {
    currentAnswer = firstNumber;
  } else {
    const pair = findSmallerNumber(firstNumber, secondNumber);
    const smallerNumber = car(pair);
    const biggerNumber = cdr(pair);
    let divisor = smallerNumber;
    while (divisor >= 1) {
      if (((smallerNumber % divisor) === 0) && ((biggerNumber % divisor) === 0)) {
        currentAnswer = divisor;
        break;
      }
      divisor -= 1;
    }
    currentAnswer = divisor;
  }
  return cons(currentQuestion, String(currentAnswer));
};
export default () => {
  engine(gcd, rules);
};
