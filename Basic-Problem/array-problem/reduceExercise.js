/**
 * Reduce Exercise
 */

// Sum & Average
const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((acc, cur)=> acc+cur)
console.log({sum})

// array flatten (7.4)
const nestedArr = [[1, 2], 3, [4, 5]];

// flatMap(7.5)
const flatMap = arr.flatMap((x) => [x, x * 2]);

// frequency checker
const votes = ["JAVA", "JS", "PHP", "PHP", "JS", "PHP"];

// implement OWN reduce

// reduce right flatten
const arr2 = [
  [1, 2],
  [3, 4],
  [5, 6],
];

//reduce array into single object
const products = [
  { name: "JS COOKBOOK", price: 350 },
  { name: "PHP COOKBOOK", price: 150 },
  { name: "JS COOKBOOK", price: 350 },
  { name: "JS COOKBOOK", price: 350 },
  { name: "LARAVEL COOKBOOK", price: 450 },
  { name: "JS COOKBOOK", price: 350 },
];
// JS COOKBOOK: {price: 1400, quantity: 3}
// total price

//Matrix Sum (Horizontal, vertical, flat sum)
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

//map & filter using reduce
//maped square

//filter

//map & filter chain by reduce

// compose function
const add10 = (n) => n + 10;
const times3 = (n) => n * 3;
const div2 = (n) => n / 2;

// pipe function pipe(add10, times3, div2)(5)

// inspect nested object
const js = {
  name: "JS 101",
  author: {
    name: "HM NAYEM",
    email: "hm@gmail.com",
  },
  contents: {
    video: {
      count: 10,
    },
  },
};
const node = {
  name: "NODE 101",
  author: {
    name: "HM NAYEM",
    email: "hm@gmail.com",
  },
  contents: {
    video: {
      count: 15,
    },
    quiz: {
      count: 10,
    },
  },
};
const react = {
  name: "JS 101",
  author: {
    name: "HM NAYEM",
    email: "hm@gmail.com",
  },
  contents: {
    video: {
      count: 5,
    },
    article: {
      count: 5,
    },
    quiz: {
      count: 10,
    },
  },
};
const courses = [js, node, react];

//generating markup lists
const links = [
  { name: "Facebook", url: "http://facebook.com" },
  { name: "Github", url: "http://github.com" },
  { name: "Linkedin", url: "http://linkedin.com" },
];

// grouping similar words (7.15)
const words = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
];

// combining data from from different source
const courseLists = [
  { id: "oc1", name: "JS 101", topic: "js", price: 500 },
  { id: "oc2", name: "Node 101", topic: "js", price: 200 },
  { id: "oc3", name: "React 101", topic: "js", price: 400 },
  { id: "oc4", name: "Php 101", topic: "Php", price: 300 },
  { id: "oc5", name: "MOngo 101", topic: "Nosql", price: 600 },
];
const discountLists = { oc1: 5, oc2: 10, oc3: 7, oc4: 0, oc5: 15 }; //percentage

//chain promise


//contact lists
const contacts = [{name:"asd", phone: "12312356"}, {name:"xsd", phone: "12312356"}, {name:"rty", phone: "12312356"}, {name:"apkrsd", phone: "12312356"}, {name:"awe", phone: "12312356"}, {name:"res", phone: "12312356"},{name:"xxx", phone: "12312356"},{name:"asq", phone: "12312356"},{name:"rre", phone: "12312356"},{name:"xsw", phone: "12312356"}]

//remove duplicates
const duplicateArr = ["nishat", "nahid", "nabilla", "nishat", "nahid"]
