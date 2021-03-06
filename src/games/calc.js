import pairs from '@hexlet/pairs';
import runEngine from '../index.js';
import { getRandomNumber } from '../utils.js';

const getAnswer = (operator, operand1, operand2) => {
  switch (operator) {
    case '+': return operand1 + operand2;
    case '-': return operand1 - operand2;
    case '*': return operand1 * operand2;
    default: throw new Error(`Error! Operator unknown ${operator}`);
  }
};

const getQuestionAndAnswer = () => {
  const operand1 = getRandomNumber(0, 10);
  const operand2 = getRandomNumber(0, 10);
  const opetarors = ['+', '-', '*'];
  const operatorIndex = getRandomNumber(0, opetarors.length - 1);
  const operator = opetarors[operatorIndex];

  const answer = getAnswer(operator, operand1, operand2);
  const question = `${operand1} ${operator} ${operand2}`;

  return pairs.cons(question, String(answer));
};

const rule = 'What is the result of the expression?';

export default () => {
  runEngine(getQuestionAndAnswer, rule);
};
