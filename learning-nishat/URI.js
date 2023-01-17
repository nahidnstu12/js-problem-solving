// var input = require("fs").readFileSync("/dev/stdin", "utf8");
// var lines = input.split("\n");

// let area = 3.14159 * input * input;
// console.log(area);

// const [x, djk] = require("fs").readFileSync("/dev/stdin", "utf8");

// console.log(`A=${(3.14159 * raio * raio).toFixed(4)}`);

// const [numero, horas, valor] = require("fs")
//   .readFileSync("/dev/stdin", "utf-8")
//   .split("\n");

// console.log(`NUMBER = ${numero}`);
// console.log(`SALARY = U$ ${(horas * valor).toFixed(2)}`);

// var input = [7,14,106]
// var lines = input.split('\n');
var lines = ['99', 99, 99]
var [a,b,c] = lines;

console.log(`${Math.max(a,b,c)} eh o maior`);
