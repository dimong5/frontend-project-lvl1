import pairs from '@hexlet/pairs';
import engine from './engine.js';
import getRandom from './utils.js';

const { cons } = pairs;
const calc = () => {
  const leftOperand = getRandom(0, 10);
  const rightOperand = getRandom(0, 10);
  const randomOperator = getRandom(0, 2);
  let mathOperator = '';
  let currentAnswer;
  switch (randomOperator) {
    case 0: mathOperator = '+'; currentAnswer = leftOperand + rightOperand; break;
    case 1: mathOperator = '-'; currentAnswer = leftOperand - rightOperand; break;
    case 2: mathOperator = '*'; currentAnswer = leftOperand * rightOperand; break;
    default: return 'Error!';
  }
  const currentQuestion = `${leftOperand} ${mathOperator} ${rightOperand}`;
  return cons(currentQuestion, String(currentAnswer));
};
const rules = 'What is the result of the expression?';
export default () => {
  engine(calc, rules);
};
