const timeFromDate = date => date.toTimeString().slice(0, 8);
var arr3 = "jones".split('');
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;