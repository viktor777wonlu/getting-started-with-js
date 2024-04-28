const sumArray = arr => arr.reduce((total, current) => total + current, 0);
const countOccurrences = (arr, element) => arr.filter(item => item === element).length;
const lastElement = arr => arr[arr.length - 1];
const symbolsPath = path.join(buildOutputPath, 'symbols');
console.log(false == '0');