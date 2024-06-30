const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const removeDuplicates = (arr) => [...new Set(arr)];
const greetings = age < 18 ? 'You are not old enough' : 'You are young!';