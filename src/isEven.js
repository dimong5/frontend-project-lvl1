import pairs from '@hexlet/pairs';
import engine from './engine.js';
import { getRandom, evenOdd } from './utils.js';

const { cons } = pairs;
const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenGame = () => {
  const currentQuestion = getRandom(0, 100);
  const correctAnswer = evenOdd(currentQuestion) ? 'yes' : 'no';
  return cons(currentQuestion, correctAnswer);
};
export default () => {
  engine(isEvenGame, rules);
};
