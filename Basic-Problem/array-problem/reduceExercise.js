/**
 * Reduce Exercise
 */

// Sum & Average  //(DONE)
const arr = [1, 2, 3, 4, 5, 6];
const sum = arr.reduce((acc, cur) => acc + cur);
const average = arr.reduce((acc, cur, index, array) => {
  acc += cur;
  if (index === array.length - 1) {
    return acc / array.length;
  }

  return acc;
});
// console.log({sum, average})

// array flatten (7.4) (DONE)
const nestedArr = [[1, 2], 3, [4, 5]];
const flatReduce = nestedArr.reduce((acc, cur) => {
  return acc.concat(cur);
}, []);

// flatMap(7.5)
const flatMap = arr.flatMap((x) => [x, x * 2]);
const flatMapReduce = nestedArr.reduce((acc, cur) => {
  // console.log({acc, cur, item: cur*2});
  // acc.concat(cur)
}, []);
// console.log({flatMapReduce, flatMap});
// frequency checker (DONE)
const votes = ["JAVA", "JS", "PHP", "PHP", "JS", "PHP"];
// {JS: 2}
const votesObjCount = votes.reduce((acc, cur) => {
  if (acc[cur]) {
    acc[cur]++;
  } else {
    acc[cur] = 1;
  }
  return acc;
}, {});
// console.log(votesObjCount);

// implement OWN reduce
const myReduce = (arr, cb, init) => {
  let acc;
  let start = 0;
  if (!init) {
    acc = arr[0];
    start = 1;
  }
  for (let i = start; i < arr.length; i++) {
    acc += cb(arr[i], i, arr);
    // console.log(acc)
  }
  return acc;
};
const mySum = myReduce(arr, (a, b) => a + b, 1);
// console.log({mySum});

// reduce right flatten (Done)
const arr2 = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const reduceRightArr = arr2.reduceRight((acc, cur) => acc.concat(cur), []);
// console.log(reduceRightArr);

//reduce array into single object (DONE)
const products = [
  { name: "JS COOKBOOK", price: 350 },
  { name: "PHP COOKBOOK", price: 150 },
  { name: "JS COOKBOOK", price: 350 },
  { name: "JS COOKBOOK", price: 350 },
  { name: "PHP COOKBOOK", price: 450 },
  { name: "JS COOKBOOK", price: 350 },
];
// JS COOKBOOK: {price: 1400, quantity: 3}
// total price

const invoiceList = products.reduce((acc, cur) => {
  // console.log(acc[cur]);

  if (acc[cur.name]) {
    acc[cur.name].price += cur.price;
    acc[cur.name].quantity++;
  } else {
    acc[cur.name] = {
      // ...acc[cur],
      price: cur.price,
      quantity: 1,
    };
  }
  return acc;
}, {});
let totalInvoicePrice = 0;
for (let key in invoiceList) {
  totalInvoicePrice += invoiceList[key]?.price;
}

// console.log({invoiceList, totalInvoicePrice})

//Matrix Sum (Horizontal, vertical, flat sum)
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// horizontal [6 15 24]
const horizontalSum = matrix.map((item) =>
  item.reduce((acc, curr) => acc + curr, 0)
);
const verticalSum = matrix.reduce((acc, cur)=> acc.map((item, ind) => acc+=cur[ind]), 0)
// const verticalSum = matrix.reduce((acc, cur)=> {
//   return acc.map((item, ind) => {
//     return acc+=cur[item]
//   })
// }, 0)
// const verticalSum = matrix.map((item, ind) => {
//   return item.reduce((acc, cur) => {
//     return cur;
//   }, 0);
// });
const flatSum = matrix.reduce((a,v) => a.reduce((acc, curr) => acc + curr, 0));

// console.log({matrix,horizontalSum,  flatSum});

//map & filter using reduce
//maped square (DONE)
const mapedReduce = arr.reduce((acc, cur) => {
  if (acc) {
    acc.push(cur * 2);
  }
  return acc;
}, []);

//filter (Done)
const filteredReduce = arr.reduce((acc, cur) => {
  if (cur % 2 == 0) {
    acc.push(cur);
  }
  return acc;
}, []);

//map & filter chain by reduce (Done)
const mapedFiltered = arr.reduce((acc, cur) => {
  if (cur % 2 == 0) {
    acc.push(cur * 2);
  }
  return acc;
}, []);

// console.log({mapedReduce, filteredReduce, mapedFiltered});

// compose function (Done)
const add10 = (n) => n + 10;
const times3 = (n) => n * 3;
const div2 = (n) => n / 2;
const n = 5;
// pipe function pipe(add10, times3, div2)(5)
const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((val, func) => func(val), x);
// console.log(pipe(add10, times3, div2)(5))

// inspect nested object (Done)
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

const inspectObj = (obj, path, returnValue = 0) => {
  // console.log(path.split('.'));
  return path.split(".").reduce((acc, cur) => {
    if (acc) {
      return acc[cur];
    }
    return returnValue;
  }, obj);
};
courses.forEach((item) => {
  const totalVideos = inspectObj(item, "contents.video.count", false);
  const totalArticles = inspectObj(
    item,
    "contents.article.count",
    "no data found"
  );
  const totalQuiz = inspectObj(item, "contents.quiz.count");
  // console.log(`${item.name} : total Videos(${totalVideos}), total Articles(${totalArticles}), total Quiz(${totalQuiz})`);
});
//generating markup lists (Done)
const links = [
  { name: "Facebook", url: "http://facebook.com" },
  { name: "Github", url: "http://github.com" },
  { name: "Linkedin", url: "http://linkedin.com" },
];

let template = `<ul>{{links}}</ul>`;

const reducedLinks = () => {
  return links.reduce((acc, cur) => {
    acc += `<li><a href='${cur.url}'>${cur.name}</a></li>`;
    return acc;
  }, "");
};
template = template.replace("{{links}}", reducedLinks());
// console.log(template);

// grouping similar words (7.15) (Done)
const words = [
  "one",
  "two",
  "mia",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
];
const groupingWords = words.reduce((acc, cur) => {
  const size = cur.length;
  if (acc[size]) {
    acc[size]++;
  } else {
    acc[size] = 1;
  }
  return acc;
}, {});
// console.log(groupingWords)
// combining data from from different source(Done)
const courseLists = [
  { id: "oc1", name: "JS 101", topic: "js", price: 500 },
  { id: "oc2", name: "Node 101", topic: "js", price: 200 },
  { id: "oc3", name: "React 101", topic: "js", price: 400 },
  { id: "oc4", name: "Php 101", topic: "Php", price: 300 },
  { id: "oc5", name: "MOngo 101", topic: "Nosql", price: 600 },
];
const discountLists = { oc1: 5, oc2: 10, oc3: 7, oc4: 0, oc5: 15 }; //percentage

// oc1:{ id: "oc1", name: "JS 101", topic: "js", price: 500, discount: 25 }
const discountedCourseLists = courseLists.reduce((acc, cur) => {
  // console.log({acc, cur});
  // console.log(acc[cur.id], cur, discountLists[cur.id]);

  if (discountLists[cur.id]) {
    const discount = (cur.price * discountLists[cur.id]) / 100;
    cur.discountedPrice = discount;
  } else {
    cur.discountedPrice = 0;
  }
  acc.push(cur);
  return acc;
}, []);

// console.log(discountedCourseLists);

//chain promise
const createPromise = (id) => {
  const randTime = Math.floor(Math.random() * 2000 + 100);
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Processing ${id} : Time ${randTime}`);
      resolve(id);
    }, randTime);
  });
};
const ids = [1, 2, 3, 4, 5];

const result = ids.reduce((acc, cur) => {
  return acc.then(() => {
    return createPromise(cur);
  });
}, Promise.resolve());

// result.then(() => {
//   console.log("Done!!!");
// });

//contact lists
const contacts = [
  { name: "asd", phone: "12312356" },
  { name: "xsd", phone: "12312356" },
  { name: "rty", phone: "12312356" },
  { name: "apkrsd", phone: "12312356" },
  { name: "awe", phone: "12312356" },
  { name: "res", phone: "12312356" },
  { name: "xxx", phone: "12312356" },
  { name: "atq", phone: "12312356" },
  { name: "rre", phone: "12312356" },
  { name: "xsw", phone: "12312356" },
];
/* output 
   A (4)
   ASD - 12312356
   ATK - 12312356
   R (1)
   RTY - 12312356
*/

//remove duplicates(Done)
const duplicateArr = ["nishat", "nahid", "nabilla", "nishat", "nahid"];
const uniqArr = duplicateArr.reduce((acc, cur) => {
  if (!acc.includes(cur)) {
    acc.push(cur);
  }
  return acc;
}, []);
// console.log(uniqArr)
