const isEmptyObject = obj => Object.keys(obj).length === 0;
const uniqueArr = (arr) => [...new Set(arr)];
const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;