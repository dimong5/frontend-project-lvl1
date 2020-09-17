import pairs from '@hexlet/pairs';
import engine from '../engine.js';
import getRandomNumber from '../utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num, divider) => {
  if (num === 2) return true;
  if (num % divider === 0) return false;
  if (divider < num / 2) return isPrime(num, divider + 1);
  return true;
};
const getQuestionAndAnswer = () => {
  const numberToBeChecked = getRandomNumber(2, 100);
  const currentAnswer = isPrime(numberToBeChecked, 2) ? 'yes' : 'no';
  return pairs.cons(numberToBeChecked, currentAnswer);
};
export default () => {
  engine(getQuestionAndAnswer, rules);
};
