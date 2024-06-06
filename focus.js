const added = [0, 1, 2, 3, 4].map((item) => item + 1);
const randomBoolean = () => Math.random() >= 0.5;
const timeFromDate = date => date.toTimeString().slice(0, 8);