import readlineSync from 'readline-sync';

export const getUserInput = (msg) => readlineSync.question(msg);
export const sendForOutput = (msg) => {
  console.log(msg);
};
