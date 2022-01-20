// 1.Find the largest element of a given array of integers

const find_largest = (nums, n) => {
  // return Math.max(...nums);

  // manual way
  let temp = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (temp < nums[i]) {
      temp = nums[i];
    }
  }
  return temp;
};

// find largest number given three number
const find_largest_one = (a, b, c) => {
  if (a > b && a > c) {
    return a;
  } else if (b > c) {
    return b;
  } else {
    return c;
  }
};
// console.log(find_largest_one(100, 40, 30));
const three_largest = (nums) => {
  let first, second, third;
  first = second = third = nums[0];
  if (nums.length < 3) {
    return -1;
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > first) {
      third = second;
      second = first;
      first = nums[i];
    } else if (nums[i] > second) {
      third = second;
      second = nums[i];
    } else {
      third = nums[i];
    }
  }

  return `${first} ${second} ${third}`;
};

// 3.Find all elements in array of integers which have at-least two greater elements
const find_greater_elements = (nums) => {
  const nums2 = nums.sort((a, b) => a - b);

  return nums2.slice(0, nums2.length - 2);
};
//4.Find the next greater element of every element of a given array of integers
const next_greater = (nums) => {
  let temp = nums[0];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        if (nums[j] > temp) {
          console.log(nums[i] + " -> " + nums[j]);
          temp = nums[j];
          break;
        } else {
          console.log(nums[i] + " -> " + temp);
          break;
        }
      }
    }
  }
};

//5. Separate even and odd numbers of an array of integers. Put all even numbers first, and then odd numbers

const segregateEvenOdd = (nums) => {
  let nums2 = nums.filter((i) => i % 2 === 0);
  let nums3 = nums.filter((i) => i % 2 === 1);
  return [...nums2, ...nums3];
};

// 6.Arrange the numbers of a given array in a way that the sum of some numbers equal the largest number in the array
const array_addition_1 = (nums) => {
  let largest = Math.max(...nums);
  let sum = nums.reduce((acc, curr) => acc + curr, 0);
  console.log({ largest, sum });
  return sum - largest === largest;
  // nums.reduce()
};
//7.Count the number of occurrences of given number in a sorted array of integers
const count_occurrences = (nums, elm) => {
  return nums.filter((i) => i === elm).length;
};

//8.Given an array A[] and a number x, check for pair in A[] with sum as x
const chkPair = (nums, x) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (i !== j && nums[i] + nums[j] === x) return true;
    }
  }
  return false;
};
function checkPalindrome(string) {
  // find the length of a string
  const len = string.length;

  // loop through half of the string
  // for (let i = 0; i < len / 2; i++) {
  //   // check if first and last string are same
  //   if (string[i] !== string[len - 1 - i]) {
  //     return "It is not a palindrome";
  //   }
  // }
  // return "It is a palindrome";
  const reverseString = string.split("").reverse().join("");
  return reverseString === string
    ? "It is a palindrome"
    : "It is not a palindrome";
}
// console.log(checkPalindrome("abbA"));

// chkPrime number
const ckPrime = (val) => {
  let flag = 0;
  for (let i = 2; i < val; i++) {
    if (val % i == 0) {
      flag = 1;
      break;
    }
  }
  return flag === 0 ? `${val} is prime number` : `${val} is not prime number`;
};
// console.log(ckPrime(15))
// prime number lists
const ckPrimeLists = ( num) => {
  
  // const lowerNumber = parseInt(prompt("Enter lower number: "));
  // const higherNumber = parseInt(prompt("Enter higher number: "));
  // console.log({lowerNumber,higherNumber})
  for (let rang = 1; rang <= num; rang++) {
    let flag = 0;
    for (let i = 2; i < rang; i++) {
      if (rang % i === 0) {
        flag = 1;
        break;
      }
    }
    if(rang > 1 && flag === 0) {
      console.log(rang)
    }
  }
  // return flag === 0 ? `${val} is prime number` : `${val} is not prime number`;
};
ckPrimeLists(11);
// 
//9.Merge an array of size n into another array of size m+n
const merge = (arr1, arr2) => {
  const arr = arr1.filter((i) => i !== "NA");
  return [...arr, ...arr2].sort((a, b) => a - b);
};
// 10. Function to left rotate arr[] of size n by d
const leftRotateByN = (nums, n) => {
  // return [...nums.slice(1,nums.length), nums[0]]
  return [...nums.slice(n, nums.length), ...nums.slice(0, n)];
};

// 11.Function to right rotate arr[] of size n by d
const rightRotateByN = (nums, n) => {
  // return [...nums.slice(1,nums.length), nums[0]]
  return [
    ...nums.slice(nums.length - n, nums.length),
    ...nums.slice(0, nums.length - n),
  ];
};

//12. insert in position 3 => 30
const insert = (nums, pos, val) => {
  return [...nums.slice(0, pos), val, ...nums.slice(pos, nums.length)];
};
// console.log(insert([12, 1, 1, 14, 4, 2], 2, 40));

// 13. insert obj
const insertObj = (objArr, obj) => {
  // normal insert
  // return [...objArr, obj]
  // search b=23
  // return objArr.find((ob) => ob.b === obj);
  // modify b=22
  // let ob = objArr.find((ob) => ob.b === obj);
  // return {...ob, a:200}
  // modify batch
  // let ob = objArr.filter((ob) => ob.b === obj).map((i) => (i.a = 200));
  // return  objArr ;
  // delete
  // return objArr.filter((ob) => ob.b !== obj);
  let ob = objArr.findIndex((ob) => ob.b === obj);
  objArr.splice(ob, 1);
  return objArr;
};

/*
1920. Build Array from Permutation
Input: nums = [0,2,1,5,3,4]
Output: [0,1,2,4,5,3]
*/
var buildArray = function (nums) {
  let ans = [];
  nums.map((i) => {
    // console.log()
    ans.push(nums[i]); // nums[]
  });
  return ans;
};
/* 1480 
// Input: nums = [1, 2, 3, 4];
// Output: [1, 3, 6, 10];
*/
var runningSum = function (nums) {
  let sum = 0;
  return nums.map((i) => (sum += i));
};
// console.log(runningSum([1, 2, 3, 4]));
/*
1672. Richest Customer Wealth
Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
*/

var maximumWealth = function (accounts) {
  // calculation in row
  let totals = accounts.map((data) =>
    data.reduce((acc, curr) => acc + curr, 0)
  );
  return Math.max(...totals);

  // calculation in column
  // return accounts.reduce((acc,curr)=> acc.map((i,j)=> i+ curr[j]))
};
/*
    1512. Number of Good Pairs
    Input: nums = [1,2,3,1,1,3]
    Output: 4
    Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
*/

var numIdenticalPairs = function (nums) {
  let count = nums.reduce(
    (acc, curr) => ((acc[curr] = (acc[curr] || 0) + 1), acc),
    {}
  );
  //  console.log(count["1"])
  let uniq = new Set(nums);
  var result = Object.keys(count).map((key) => count[key]);
  var result = Object.keys(count).map((key) => [Number(key), count[key]]);
  // var result = Object.fromEntries(count);
  return { count, result, uniq: [...uniq] };
};

// console.log(numIdenticalPairs([1, 2, 5, 1, 1, 5, 5]));
//

//
let nums = [7, 12, 30, 15, 19, 7, 32, 56, 171];
let mPlusN = [2, 8, "NA", "NA", "NA", 13, "NA", 15, 20];
let N = [5, 7, 9, 25];
let objArr = [
  { a: 10, b: 21 },
  { a: 20, b: 22 },
  { a: 20, b: 22 },
  { a: 30, b: 23 },
  { a: 40, b: 24 },
  { a: 20, b: 22 },
];
let obj = { a: 100, b: 200 };
// console.log(merge(mPlusN, N));
// console.log(find_largest(nums, nums.length));
// console.log(three_largest(nums));
// console.log(find_greater_elements(nums))
// next_greater(nums);
// console.log(segregateEvenOdd(nums));
// console.log(array_addition_1(nums));
// console.log(count_occurrences(nums, 7));
// console.log(chkPair(nums, 14));
// console.log(leftRotateByN(nums, 3))
// console.log(rightRotateByN(nums, 3))
// console.log(insert(nums, 3, 30));
// console.log(insertObj(objArr, obj))
// console.log(insertObj(objArr, 22)); //won't solve
// console.log(buildArray([0, 2,6, 1, 5, 3, 4]));
// console.log(runningSum([1, 2, 3, 4]));
// console.log(
//   maximumWealth([
//     [2, 8, 7],
//     [7, 1, 3],
//     [1, 9, 5],
//   ])
// );
// console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
