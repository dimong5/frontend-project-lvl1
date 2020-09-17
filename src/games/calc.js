import pairs from '@hexlet/pairs';
import engine from '../engine.js';
import getRandomNumber from '../utils.js';

const getQuestionAndAnswer = () => {
  const leftOperand = getRandomNumber(0, 10);
  const rightOperand = getRandomNumber(0, 10);
  const randomOperator = getRandomNumber(0, 2);
  let mathOperator = '';
  let currentAnswer;
  switch (randomOperator) {
    case 0: mathOperator = '+'; currentAnswer = leftOperand + rightOperand; break;
    case 1: mathOperator = '-'; currentAnswer = leftOperand - rightOperand; break;
    case 2: mathOperator = '*'; currentAnswer = leftOperand * rightOperand; break;
    default: return 'Error!';
  }
  const currentQuestion = `${leftOperand} ${mathOperator} ${rightOperand}`;
  return pairs.cons(currentQuestion, String(currentAnswer));
};
const rules = 'What is the result of the expression?';
export default () => {
  engine(getQuestionAndAnswer, rules);
};
