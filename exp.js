const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
console.log("0 || 1 = "+(0 || 1));
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;