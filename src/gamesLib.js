import readlineSync from 'readline-sync';
import pkg from '@hexlet/pairs';
import { getUserName, wrongArnswerMessage } from './gamesCliLib.js';

const { car, cdr } = pkg;
export const getRandom = (min, max) => Math.round(Math.random() * (max - min) + min);
export const evenOdd = (num) => {
  if (num % 2 === 0) return 'yes';
  return 'no';
};

export const engine = (func, rules) => {
  const userName = getUserName();
  let counter = 0;
  console.log(rules);
  do {
    const gameData = func();
    const currentQuestion = car(gameData);
    const correctAnswer = cdr(gameData);
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
