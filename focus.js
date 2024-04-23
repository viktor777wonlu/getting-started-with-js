const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;
const arrayContains = (arr, element) => arr.includes(element);
const lastElement = arr => arr[arr.length - 1];
const copyToClipboard = (text) => navigator.clipboard.writeText(text);
const removeDuplicates = (arr) => [...new Set(arr)];
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);