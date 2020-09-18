import pairs from '@hexlet/pairs';
import engine from '../engine.js';
import getRandomNumber from '../utils.js';

const rule = 'What number is missing in the progression?';
const getProgression = (lenght, start, step, secret) => {
  const progression = [];
  progression.push(start);
  for (let i = 1; i < lenght; i += 1) {
    progression.push(start + step * i);
  }
  progression[secret] = '..';
  return progression;
};
const getQuestionAnswerAnd = () => {
  const length = 10;
  const start = getRandomNumber(0, 100);
  const step = getRandomNumber(1, 5);
  const secret = getRandomNumber(0, length - 1);

  const progression = getProgression(length, start, step, secret);
  const secretIndex = progression.indexOf('..');
  const currentAnswer = start + secretIndex * step;
  const currentQuestion = progression.join(' ');

  return pairs.cons(currentQuestion, String(currentAnswer));
};
export default () => {
  engine(getQuestionAnswerAnd, rule);
};
