
const value1 = [23,23];
const value2 = [40,50];
const total = [...value1, ...value2];
console.log(total);

const jack = 400;
const mack = 500;
const result = [jack, mack];
const max = Math.max(...result); //what a jerk 3dots!!! faul
console.log(max);