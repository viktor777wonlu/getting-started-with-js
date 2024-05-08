const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
console.log("1 && 2 = "+(1 && 2));