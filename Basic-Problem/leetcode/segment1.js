/*
1920. Build Array from Permutation
Input: nums = [0,2,1,5,3,4]
Output: [0,1,2,4,5,3]

1929. Concatenation of Array
Input: nums = [1,2,1]
Output: [1,2,1,1,2,1]

2011. Final Value of Variable After Performing Operations
Input: operations = ["--X","X++","X++"]
Output: 1

1480. Running Sum of 1d Array
Input: nums = [1,2,3,4]
Output: [1,3,6,10]

1672. Richest Customer Wealth
Input: accounts = [[1,2,3],[3,2,1]]
Output: 6

1431. Kids With the Greatest Number of Candies
Input: candies = [2,3,5,1,3], extraCandies = 3
Output: [true,true,true,false,true] 

1512. Number of Good Pairs
Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

1365. How Many Numbers Are Smaller Than the Current Number
Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]

1470. Shuffle the Array
Input: nums = [2,5,1,3,4,7], n = 3
Output: [2,3,5,4,1,7] 
*/

//1920
var buildArray = function (nums) {
  let ans = [];
  nums.map((_, i) => {
    ans.push(nums[nums[i]]);
    // ans = [...ans, nums[nums[i]]]
  });
  return ans;
};
// console.log(buildArray([5, 0, 1, 2, 3, 4]));

/* 1929 */
var getConcatenation = function (nums) {
  // let ans = [];
  // let n = nums.length;
  // for (let i = 0; i < 2 * n; i++) {
  //   ans.push(nums[i])
  // }
  // ans = ;
  return [...nums, ...nums];
};
// console.log(getConcatenation([1, 3, 2, 1]));

/* 2011
// Input: operations = ["--X", "X++", "X++"];
// Output: 1;
*/

var finalValueAfterOperations = function (operations) {
  let x = 0;
  operations.map((i) => {
    i === "X++" || i === "++X" ? ++x : --x;
  });

  return x;
};

var finalValueAfterOperations = function (operations) {
  return operations.reduce((acc, curr) => (curr[1] === "+" ? ++acc : --acc), 0);
};
// console.log(finalValueAfterOperations([1,2,3,4]));
// console.log(finalValueAfterOperations(["X++", "++X", "--X"]));

/* 1480 
// Input: nums = [1, 2, 3, 4];
// Output: [1, 3, 6, 10];
*/

var runningSum = function (nums) {
  let ans = [];

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = 0; j <= i; ++j) {
      sum += nums[j];
      //  console.log(nums[i]);
    }
    ans.push(sum);
  }

  return sum;
};
var runningSum = function (nums) {
  const ans = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    ans.push(sum);
  }
  return ans;
};
// console.log(runningSum([1, 2, 3, 4]));

/*
1672. Richest Customer Wealth
Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
*/

var maximumWealth = function (accounts) {
  let sum;
  sum = accounts.map((acc) => acc.reduce((count, curr) => count + curr, 0));
  return Math.max(...sum);
};
// console.log(
//   maximumWealth([
//     [2, 8, 7],
//     [7, 1, 3],
//     [1, 9, 5],
//   ])
// );

// var matrix = [
//   [1, 2, 3],
//   [7, 2, 6],
// ];

// sums of rows
// var rowSum = matrix.map((r) => r.reduce((a, b) => a + b));

// sums of columns
// var colSum = matrix.reduce((a, b) => a.map((x, i) => x + b[i]));

// console.log(rowSum);
// console.log(colSum);

/* 
1431. Kids With the Greatest Number of Candies
  Input: candies = [2,3,5,1,3], extraCandies = 3
  Output: [true,true,true,false,true] 
*/

var kidsWithCandies = function (candies, extraCandies) {
  const maxCandy = Math.max(...candies);
  let ans = [];
  ans = candies.map((candy) => {
    return candy + extraCandies >= maxCandy ? true : false;
  });
  return ans;
};

// console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));

/*
    1512. Number of Good Pairs
    Input: nums = [1,2,3,1,1,3]
    Output: 4
    Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
*/

var numIdenticalPairs = function (nums) {
  let result = [];
  let finalRes = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    result[nums[i]] = (result[nums[i]] || 0) + 1;
    // console.log({result})
  }

  finalRes = Object.keys(result).map((key) => result[key]);
  // console.log(finalRes)
  finalRes.map((item) => {
    if (item > 1) {
      sum += (item * (item - 1)) / 2;
    }
  });
  return sum;
};
// function numIdenticalPair(nums) {
//   // O(n)
//   const map = nums.reduce((m, n) => m.set(n, (m.get(n) || 0) + 1), new Map());
//   return [...map.values()].reduce((num, n) => num + (n * (n - 1)) / 2, 0);
// }

// const map = [1, 1, 1, 1, 2, 3, 4, 3].reduce(
//   (m, n) => console.log(m.set(n, (m.get(n) || 0) + 1)),
//   new Map()
// );
console.log(numIdenticalPairs([1, 1, 1,1, 2, 3, 4,3]));

// const array = ["a", "a", "b"];
// const result = [];
// let finalRes = [];

// for (let i = 0; i < array.length; i++) {
//   result[array[i]] = (result[array[i]] || 0) + 1;
// }

// finalRes = Object.keys(result).map((key) => ({ [key]: result[key] }));

// console.log(finalRes);
// console.log(result);
// console.log(result["a"]);
// console.log(Object.keys(result).map((key) => result[key]));

/*
1365. How Many Numbers Are Smaller Than the Current Number
Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]
*/
// var smallerNumbersThanCurrent = function (nums) {
//   let count = 0;
//   let ans ;
//   ans = nums.map((item) => {
//     count = 0;
//     nums.map((i) => {
//       if (item > i) {
//         count++;
//       }
//     });
//     return count
//   });
//   return ans;
// };
var smallerNumbersThanCurrent = function (nums) {
  const sorted = [...nums].sort((a, b) => a - b);
  return nums.map((item) => sorted.indexOf(item));
};

// var smallerNumbersThanCurrent = function (nums) {
//   const sorted = [...nums].sort((a, b) => a - b);
//   return nums.map((num) => sorted.indexOf(num));
// };

// var smallerNumbersThanCurrent = function (nums) {
//   return nums.map((n) => nums.reduce((a, b) => a + (n > b ? 1 : 0), 0));
// };

// console.log(smallerNumbersThanCurrent([8, 1,2]));
// console.log(smallerNumbersThanCurrent([5, 0, 10, 0, 10, 6]));

/*
1470. Shuffle the Array
Input: nums = [2,5,1,3,4,7], n = 3
Output: [2,3,5,4,1,7] 
*/

var shuffle = function (nums, n) {
  let ans = [];
  nums.slice(0, n).map((item, index) => {
    ans.push(item, nums[n + index]);
    // ans.push(nums[n + index]);
  });
  return ans;
};
// const shuffle2 = (nums, n) =>
// nums.map((_, i) =>
//   i % 2 === 0 ? console.log(nums[i / 2]) : console.log(nums[n + (i - 1) / 2])
// );
// nums.map((_, i) =>
//   i % 2 === 0
//     ? console.log(i + " " + i / 2 + " " + nums[i / 2])
//     : console.log(i + " " + (n + (i - 1) / 2) + " " + nums[n + (i - 1) / 2])
// );

// const shuffle2 = (nums, n) =>
//   nums.map((_, i) => nums[(i % 2 ? n : 0) + Math.floor(i / 2)]);

// console.log(shuffle2([2, 5, 1, 3, 4, 7], 3));

// console.log(3 % 2 ? 5 : 0); //odd rule
