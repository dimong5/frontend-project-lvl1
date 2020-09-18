import pairs from '@hexlet/pairs';
import { getUserInput, sendForOutput } from './cli.js';

export default (gameModule, rules) => {
  sendForOutput('Welcome to the Brain Games!');
  const userName = getUserInput('May I have your name? ');
  sendForOutput(`Hello, ${userName}!`);
  let counter = 0;
  sendForOutput(rules);
  const roundsQuantity = 3;
  while (counter < roundsQuantity) {
    const gameData = gameModule();
    const currentQuestion = pairs.car(gameData);
    const correctAnswer = pairs.cdr(gameData);
    sendForOutput(`Question: ${currentQuestion}`);
    const userAnswer = getUserInput('Your answer: ');
    if (userAnswer === correctAnswer) {
      sendForOutput('Correct!');
      counter += 1;
    } else {
      sendForOutput(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      sendForOutput(`Let's try again, ${userName}!`);
      return;
    }
  }
  sendForOutput(`Congratulations, ${userName}!`);
};
