import pairs from '@hexlet/pairs';
import engine from '../engine.js';
import getRandomNumber from '../utils.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;
const isEvenGame = () => {
  const currentQuestion = getRandomNumber(0, 100);
  const correctAnswer = isEven(currentQuestion) ? 'yes' : 'no';
  return pairs.cons(currentQuestion, correctAnswer);
};
export default () => {
  engine(isEvenGame, rule);
};
