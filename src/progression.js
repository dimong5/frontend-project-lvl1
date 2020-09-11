import pairs from '@hexlet/pairs';
import engine from './engine.js';
import getRandom from './utils.js';

const { cons } = pairs;
const rules = 'What number is missing in the progression?';
const progression = () => {
  const progressionLength = 10;
  const startNumber = getRandom(0, 100);
  const increaseBy = getRandom(1, 5);
  const progressionArray = [];
  progressionArray.push(startNumber);
  for (let i = 1; i < progressionLength; i += 1) {
    progressionArray.push(progressionArray[i - 1] + increaseBy);
  }
  const emptyPosition = getRandom(0, progressionLength - 1);
  const currentAnswer = progressionArray[emptyPosition];
  progressionArray[emptyPosition] = '..';
  const currentQuestion = progressionArray.join(' ');
  return cons(currentQuestion, String(currentAnswer));
};
export default () => {
  engine(progression, rules);
};
