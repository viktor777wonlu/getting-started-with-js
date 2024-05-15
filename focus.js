console.log("0 || 1 = "+(0 || 1));
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);