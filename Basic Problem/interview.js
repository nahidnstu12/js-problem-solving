let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    console.log(`${phrase}, ${user}`);
  }
}

// sayHi();

let arr = [1, 2, 3, 4, 5, 6, 7];

// let res = arr.filter((v) => (a, b) => v >= a && v <= b);
function inBetween(a, b) {
  return function (x) {
    return x >= a && x <= b;
  };
}
// console.log(arr.filter(inBetween(4,6)));

// users.sort(byField("name"));
let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];

function byField(str) {
  return function (a, b) {
    return a[str] > b[str] ? 1 : -1;
  };
}

// console.log(users.sort(byField("age")));

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    // i = 0;
    let shooter = function () {
      // create a shooter function,
      console.log(i); // that should show its number
    };
    shooters.push(shooter); // and add it to the array
    i++;
  }

  // ...and return the array of shooters
  return shooters;
}

let army = makeArmy();

// all shooters show 10 instead of their numbers 0, 1, 2, 3...
// army[0](); // 10 from the shooter number 0
// army[1](); // 10 from the shooter number 1
// army[2]();
// army()

function es5var() {
  if (true) {
    const a = 5;
  }
  console.log("Value: " + a);
}

// es5var();
let i = 13;

for (let i = 0; i < 5; i++) {
//   console.log(i);
}

// console.log("Value: " + i);
let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// rest is array of items, starting from the 3rd one
// console.log(rest[0]); // Consul
// console.log(rest[1]); // of the Roman Republic
// console.log(rest); // 2

// let a = ['a',1,'abc', false,undefined, NaN]
// console.log(a.filter(v=>!v));
// Resizing any array
let animals = ["🐕", "🐒", "🦊", "🐅"];

// We can use array's length property
animals.length = 6;

// console.log(animals); // ["🐕", "🐒", "🦊"] 
// Replace all occurances of a string
const quote = "React is a JS framework & this framework is the most popular front-end framework right now";

// Replace all occurances of 'framework' with 'library'
// console.log(quote.replace(/framework/g, "library"));


// const numbers = [1, 2, 3, 4, 5, 6];
// console.log(numbers.sort(() => Math.random() - 0.5));
// console.log(Math.random() - 0.5);

// 8. comma operator

// what will be the output of below code?
function b(){
    console.log(`the length is ${this.length}`);
}

let ap = {
    length: 10,
    method: function(b) {
        arguments[0]();
    }
};

// ap.method(b, 5,4); // the length is 2
// what will be the output of below code?
const a = 'constructor';
console.log(a[a]()); // "1"