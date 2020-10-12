import readlineSync from 'readline-sync';

export const ask = (question) => readlineSync.question(question);
export const print = (msg) => {
  console.log(msg);
};
