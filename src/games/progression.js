import pairs from '@hexlet/pairs';
import engine from '../engine.js';
import getRandomNumber from '../utils.js';

const rules = 'What number is missing in the progression?';
const getProgression = () => {
  const progressionLength = 10;
  const startNumber = getRandomNumber(0, 100);
  const increaseBy = getRandomNumber(1, 5);
  const progressionArray = [];
  progressionArray.push(startNumber);
  for (let i = 1; i < progressionLength; i += 1) {
    progressionArray.push(progressionArray[i - 1] + increaseBy);
  }
  return progressionArray;
};
const getAnswerAndQuestion = () => {
  const progression = getProgression();
  const emptyPosition = getRandomNumber(0, progression.length - 1);
  const currentAnswer = progression[emptyPosition];
  progression[emptyPosition] = '..';
  const currentQuestion = progression.join(' ');
  return pairs.cons(currentQuestion, String(currentAnswer));
};
export default () => {
  engine(getAnswerAndQuestion, rules);
};
