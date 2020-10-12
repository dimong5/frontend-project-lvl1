import pairs from '@hexlet/pairs';
import { ask, print } from './cli.js';

const roundsQuantity = 3;

export default (getQuestionAndAnswer, rule) => {
  print('Welcome to the Brain Games!');
  const userName = ask('May I have your name? ');
  print(`Hello, ${userName}!`);
  print(rule);
  for (let i = 0; i < roundsQuantity; i += 1) {
    const gameData = getQuestionAndAnswer();
    const currentQuestion = pairs.car(gameData);
    const correctAnswer = pairs.cdr(gameData);
    print(`Question: ${currentQuestion}`);
    const userAnswer = ask('Your answer: ');
    if (userAnswer === correctAnswer) {
      print('Correct!');
    } else {
      print(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      print(`Let's try again, ${userName}!`);
      return;
    }
  }
  print(`Congratulations, ${userName}!`);
};
