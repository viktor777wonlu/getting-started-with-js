const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
const maxNumber = arr => Math.max(...arr);