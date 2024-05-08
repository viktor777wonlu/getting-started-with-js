const merge = (a, b) => [...a, ...b];
const countOccurrences = (arr, element) => arr.filter(item => item === element).length;
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);