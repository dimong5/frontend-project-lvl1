import pairs from '@hexlet/pairs';
import engine from '../engine.js';
import getRandomNumber from '../utils.js';

const rule = 'Find the greatest common divisor of given numbers.';
const gcd = (a, b) => {
  if (a === b) {
    return a;
  }
  if (a > b) return gcd(a - b, b);
  return gcd(a, b - a);
};
const getQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber(1, 50);
  const secondNumber = getRandomNumber(1, 50);
  const currentQuestion = `${firstNumber} ${secondNumber}`;
  const currentAnswer = gcd(firstNumber, secondNumber);
  return pairs.cons(currentQuestion, String(currentAnswer));
};
export default () => {
  engine(getQuestionAndAnswer, rule);
};
