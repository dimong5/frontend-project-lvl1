import pairs from '@hexlet/pairs';
import runEngine from '../index.js';
import { getRandomNumber } from '../utils.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};
const getQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 100);
  const answer = isPrime(question, 2) ? 'yes' : 'no';
  return pairs.cons(question, answer);
};
export default () => {
  runEngine(getQuestionAndAnswer, rule);
};
