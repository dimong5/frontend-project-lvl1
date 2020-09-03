import readlineSync from 'readline-sync';
import { getUserName, wrongArnswerMessage, gameRules } from './gamesCliLib.js';

export const getRandom = (min, max) => Math.round(Math.random() * (max - min) + min);
export const evenOdd = (num) => {
  if (num % 2 === 0) return 'yes';
  return 'no';
};
const minNum = 0;
const maxNum = 100;

export const engine = (func) => {
  gameRules(0);
  const userName = getUserName();
  let counter = 0;
  do {
    const currentQuestion = getRandom(minNum, maxNum);
    const correctAnswer = func(currentQuestion);
    console.log('Question: ', currentQuestion);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      counter += 1;
    } else {
      wrongArnswerMessage(userAnswer, correctAnswer, userName);
      counter = 'wrongAnswer';
    }
  } while (counter !== 'wrongAnswer' && counter < 3);
  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
