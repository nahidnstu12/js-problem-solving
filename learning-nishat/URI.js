var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let area = 3.14159 * input * input;
console.log(area);

const [x, djk] = require("fs").readFileSync("/dev/stdin", "utf8");

console.log(`A=${(3.14159 * raio * raio).toFixed(4)}`);

const [numero, horas, valor] = require("fs")
  .readFileSync("/dev/stdin", "utf-8")
  .split("\n");

console.log(`NUMBER = ${numero}`);
console.log(`SALARY = U$ ${(horas * valor).toFixed(2)}`);