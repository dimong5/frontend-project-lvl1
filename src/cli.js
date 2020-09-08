import readlineSync from 'readline-sync';

export const getUserInput = (nameQuery) => readlineSync.question(nameQuery);
export const sendForOutput = (msg) => {
  console.log(msg);
};
