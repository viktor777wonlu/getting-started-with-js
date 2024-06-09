const timeFromDate = date => date.toTimeString().slice(0, 8);
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));