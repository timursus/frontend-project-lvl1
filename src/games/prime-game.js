import {
  getName,
  getAnswer,
  displayTheTask,
  numberOfRounds,
  getRandomInt,
  congratsSuccess,
} from '../index.js';

const isPrime = (num) => {
  const half = num / 2;
  for (let divisor = 2; divisor <= half; divisor += 1) {
    if (num % divisor === 0) return false;
  }
  return true;
};

export default () => {
  const name = getName();
  const numberProperty = 'prime';
  displayTheTask(numberProperty);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const number = getRandomInt(2, 50);
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    const answer = getAnswer(name, number, correctAnswer);
    if (answer !== correctAnswer) return;
  }

  congratsSuccess(name);
};
