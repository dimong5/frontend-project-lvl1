import pairs from '@hexlet/pairs';
import runEngine from '../index.js';
import { getRandomNumber } from '../utils.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;
const getQuestionAndAnswer = () => {
  const currentQuestion = getRandomNumber(0, 100);
  const correctAnswer = isEven(currentQuestion) ? 'yes' : 'no';
  return pairs.cons(currentQuestion, correctAnswer);
};
export default () => {
  runEngine(getQuestionAndAnswer, rule);
};
