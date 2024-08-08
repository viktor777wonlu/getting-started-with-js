const merge = (a, b) => [...a, ...b];
const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);