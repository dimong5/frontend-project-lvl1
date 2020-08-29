import readlineSync from 'readline-sync';

export default () => {
  const userName = readlineSync.question('May I have your name? ');
  const minNum = 0;
  const maxNum = 100;
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const getRandom = (min, max) => Math.round(Math.random() * (max - min) + min);
  const evenOdd = (num) => {
    if (num % 2 === 0) return 'yes';
    return 'no';
  };
  let counter = 0;
  do {
    const currentNum = getRandom(minNum, maxNum);
    const correctAnswer = evenOdd(currentNum);
    console.log('Question: ', currentNum);
    console.log(currentNum);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      counter = 'wrongAnswer';
    }
  } while (counter !== 'wrongAnswer' && counter < 3);
  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
