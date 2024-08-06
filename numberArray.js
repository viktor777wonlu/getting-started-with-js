const isArray = (arr) => Array.isArray(arr);
const reversedString = str => str.split('').reverse().join('');
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;