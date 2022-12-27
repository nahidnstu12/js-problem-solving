const arr = [1,2,3,4]
const sum = arr.reduce((acc, cur, index, array)=> {
  // 1st round acc = arr[0] || value 
  // 10/4=2.25
  // sss/4 = NaN
  acc+=cur //1+2=3
  
  if(index === array.length-1){
    return acc/array.length
  }
  return acc
})
/**
 * init value  arr[0]
 * acc = arr[0]
 * acc= arr[0]+arr[1]
 * return acc
 * acc=acc + arr[2]
 */
// console.log("sum", sum); 

/**
 * problem 1
 * reduce array into single object
 */
//
const products = [
  { name: "JS COOKBOOK", price: 350 },
  { name: "PHP COOKBOOK", price: 150 },
  { name: "JS COOKBOOK", price: 350 },
  { name: "JS COOKBOOK", price: 350 },
  { name: "LARAVEL COOKBOOK", price: 450 },
  { name: "JS COOKBOOK", price: 350 },
  { name: "LARAVEL COOKBOOK", price: 450 },
];
// JS COOKBOOK: {price: 350, quantity: 1}
/**
 * acc ={JS COOKBOOK:..,
 *        php cookbook: ..}
 * JS COOKBOOK=1400
 * PHP =1200
 */

const obj = {
  'JS COOKBOOK': { price: 350+350, qty: 1+1 },
  'PHP COOKBOOK': { price: 150, qty: 1 },
  'LARAVEL COOKBOOK': { price: 450, qty: 1 }
}

const productsLists = products.reduce((acc, cur)=> {
  
  if(acc[cur.name]){
    acc[cur.name].price += cur.price
    acc[cur.name].qty++
  }else{
    acc[cur.name] = {
      price:cur.price,
      qty: 1
    }
  }
  return acc
}, {})


/**
 * {}
 * acc["JS COOKBOOK"]
 * "JS COOKBOOK": {price: 350, qty: 1}
 * acc[PHP COOKBOOK]
 */

// console.log(productsLists);


/**
 * problem 2
 * map & filter chain by reduce
 * given an array, each are multipied by 3 & filtered even array
 * [1,2,3,4]=>[3,6,9,12] => [6,12]
 */
const mappedFiltered = arr.reduce((acc, cur)=> {
  console.log(acc, cur);
  
  if(cur % 2 == 0){
    acc.push(cur*4)
  } 
  return acc
}, [])
console.log(mappedFiltered);


/**
 * problem 3
 * combining data from from different source
 * { id: "oc1", name: "JS 101", topic: "js", price: 500, discount: 125, net: 375 },
 * 5*500/100
 */

const courseLists = [
  { id: "oc1", name: "JS 101", topic: "js", price: 500 },
  { id: "oc2", name: "Node 101", topic: "js", price: 200 },
  { id: "oc3", name: "React 101", topic: "js", price: 400 },
  { id: "oc4", name: "Php 101", topic: "Php", price: 300 },
  { id: "oc5", name: "MOngo 101", topic: "Nosql", price: 600 },
];
const discountLists = { oc1: 5, oc2: 10, oc3: 7, oc4: 0, oc5: 15 }; //percentage

/**
 * problem
 * Matrix Sum (Horizontal, vertical, flat sum)
 */
//
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

/**
 * [6 15 24]
 * [12 15 18]
 * 45
 */
