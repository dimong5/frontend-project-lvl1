import readlineSync from 'readline-sync';

export const getUserName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};
export const wrongArnswerMessage = (userAnswer, correctAnswer, userName) => {
  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  console.log(`Let's try again, ${userName}!`);
  return null;
};
export const gameRules = (gameNum) => {
  const rules = [];
  rules[0] = 'Answer "yes" if the number is even, otherwise answer "no".';
  return console.log(rules[gameNum]);
};

