import pkg from '@hexlet/pairs';
import { engine, getRandom } from './gamesLib.js';

const { cons } = pkg;
const calc = () => {
  const aOper = getRandom(0, 10);
  const bOper = getRandom(0, 10);
  const rand = getRandom(0, 2);
  let mathOperator = '';
  let currentAnswer;
  switch (rand) {
    case 0: mathOperator = '+'; currentAnswer = aOper + bOper; break;
    case 1: mathOperator = '-'; currentAnswer = aOper - bOper; break;
    case 2: mathOperator = '*'; currentAnswer = aOper * bOper; break;
    default: return 'Error!';
  }
  const currentQuestion = `${aOper} ${mathOperator} ${bOper}`;
  return cons(currentQuestion, String(currentAnswer));
};
const rules = 'What is the result of the expression?';
export default () => {
  engine(calc, rules);
};
