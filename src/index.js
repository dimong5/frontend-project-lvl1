import pairs from '@hexlet/pairs';
import { askQuestion, print } from './cli.js';

const roundsQuantity = 3;

export default (gameModule, rules) => {
  print('Welcome to the Brain Games!');
  const userName = askQuestion('May I have your name? ');
  print(`Hello, ${userName}!`);
  print(rules);
  for (let i = 0; i < roundsQuantity; i += 1) {
    const gameData = gameModule();
    const currentQuestion = pairs.car(gameData);
    const correctAnswer = pairs.cdr(gameData);
    print(`Question: ${currentQuestion}`);
    const userAnswer = askQuestion('Your answer: ');
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
