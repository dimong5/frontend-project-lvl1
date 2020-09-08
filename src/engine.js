import pairs from '@hexlet/pairs';
import { getUserInput, sendForOutput } from './cli.js';

const { car, cdr } = pairs;
export default (func, rules) => {
  const welcomeMessage = 'Welcome to the Brain Games!';
  sendForOutput(welcomeMessage);
  const nameQuery = 'May I have your name? ';
  const userName = getUserInput(nameQuery);
  const helloMessage = `Hello, ${userName}!`;
  sendForOutput(helloMessage);
  let counter = 0;
  sendForOutput(rules);
  while (counter <= 2) {
    const gameData = func();
    const currentQuestion = car(gameData);
    const correctAnswer = cdr(gameData);
    sendForOutput(`Question: ${currentQuestion}`);
    const userAnswerQuery = 'Your answer: ';
    const userAnswer = getUserInput(userAnswerQuery);
    if (userAnswer === correctAnswer) {
      sendForOutput('Correct!');
      counter += 1;
    } else {
      const wrongAnswerMessage = `"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`;
      const tryAgainMessage = `Let's try again, ${userName}!`;
      sendForOutput(wrongAnswerMessage);
      sendForOutput(tryAgainMessage);
      break;
    }
  }
  if (counter === 3) sendForOutput(`Congratulations, ${userName}!`);
};
