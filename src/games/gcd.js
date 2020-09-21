import pairs from '@hexlet/pairs';
import runEngine from '../index.js';
import { getRandomNumber } from '../utils.js';

const rule = 'Find the greatest common divisor of given numbers.';
const getGcd = (a, b) => {
  if (a === b) {
    return a;
  }
  if (a > b) return getGcd(a - b, b);
  return getGcd(a, b - a);
};
const getQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber(1, 50);
  const secondNumber = getRandomNumber(1, 50);
  const currentQuestion = `${firstNumber} ${secondNumber}`;
  const currentAnswer = getGcd(firstNumber, secondNumber);
  return pairs.cons(currentQuestion, String(currentAnswer));
};
export default () => {
  runEngine(getQuestionAndAnswer, rule);
};
