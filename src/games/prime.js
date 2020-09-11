import pairs from '@hexlet/pairs';
import engine from '../engine.js';
import { getRandom } from '../utils.js';

const { cons } = pairs;

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = () => {
  const numberToBeChecked = getRandom(2, 100);
  let checker = true;
  for (let divisor = numberToBeChecked - 1; divisor >= 2; divisor -= 1) {
    if (!(numberToBeChecked % divisor)) {
      checker = false;
      break;
    }
  }
  const currentAnswer = checker ? 'yes' : 'no';
  return cons(numberToBeChecked, currentAnswer);
};
export default () => {
  engine(isPrime, rules);
};
