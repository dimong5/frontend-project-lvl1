import pkg from '@hexlet/pairs';
import { engine, evenOdd, getRandom } from './gamesLib.js';

const { cons } = pkg;
const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
export const isEvenGame = () => {
  const minNum = 0;
  const maxNum = 100;
  const currentQuestion = getRandom(minNum, maxNum);
  const correctAnswer = evenOdd(currentQuestion);
  return cons(currentQuestion, correctAnswer);
};
export default () => {
  engine(isEvenGame, rules);
};
