import readlineSync from 'readline-sync';

export const askQuestion = (msg) => readlineSync.question(msg);
export const print = (msg) => {
  console.log(msg);
};
