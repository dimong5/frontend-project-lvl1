import pairs from '@hexlet/pairs';
import runEngine from '../index.js';
import { getRandomNumber } from '../utils.js';

const progressionLength = 10;

const rule = 'What number is missing in the progression?';
const getProgression = (progressionLength, start, step) => {
  const progression = [];
  for (let i = 0; i <= progressionLength; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const getQuestionAndAnswer = () => {
  const start = getRandomNumber(0, 100);
  const step = getRandomNumber(1, 5);
  const progression = getProgression(progressionLength, start, step);

  const secretElementIndex = getRandomNumber(0, progressionLength - 1);
  progression[secretElementIndex] = '..';

  const secretIndex = progression.indexOf('..');
  const answer = start + secretIndex * step;
  const question = progression.join(' ');

  return pairs.cons(question, String(answer));
};
export default () => {
  runEngine(getQuestionAndAnswer, rule);
};
