/*
1528. Shuffle String
Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
Output: "leetcode"
*/

var restoreString = function (s, indices) {
  let ans = "";
  indices.map((_, j) => (ans += s[indices.indexOf(j)]));
  // s[indices.indexOf(0)]   //s[4]

  return ans;
};

// console.log(restoreString("aiohn", [3, 1, 4, 2, 0]));

/*
1313. Decompress Run-Length Encoded List
Input: nums = [1,2,3,4]
Output: [2,4,4,4]
*/
var decompressRLElist = function (nums) {
  let ans = [];
  for (let i = 1; i < nums.length; i += 2) {
    for (let j = 0; j < nums[i - 1]; j++) {
      ans.push(nums[i]);
    }
  }
  return ans;
};

// var decompressRLElist = function (nums) {
//   const res = [];
//   for (let i = 0; i < nums.length; i += 2) {
//     const arr = new Array(nums[i]).fill(nums[i + 1]);
//     res.push(...arr);
//   }
//   return res;
// };

// console.log(decompressRLElist([1, 2, 3, 4]));
// console.log(new Array(3).fill(1));

/*
1720. Decode XORed Array
Input: encoded = [1,2,3], first = 1
Output: [1,0,2,1]
*/
var decode = function (encoded, first) {
  let ans = [];
  ans.push(first);
  encoded.map((item, i) => {
    ans.push(ans[i] ^ item);
  });

  return ans;
};
// console.log(decode([6, 2, 7, 3], 4));

/*
1389. Create Target Array in the Given Order
Input: nums = [0,1,2,3,4], index = [0,1,2,3,1]
Output: [0,4,1,3,2]
*/

var createTargetArray = function (nums, index) {
  let ans = [];
  for (let i = 0; i < index.length; i++) {
    let num = nums[i];
    let idx = index[i];
    ans.splice(idx, 0, num);
  }
  return ans;
};

// var createTargetArray = function (nums, index) {
//   return index.reduce((acc, curr, idx)=>[...acc.slice(0,curr), nums[idx], ...acc.slice(curr)],[])
// };

// console.log(createTargetArray([1, 2, 3, 4, 0], [0, 1, 2, 3, 0]));

// console.log(createTargetArray([0, 11, 22, 30, 44], [0, 1, 2, 2, 1]));
// console.log([0, 11, 22, 30, 44].slice(0,2));
// let nums = [0, 11, 22, 30, 44];
// let idx = [0, 1, 2, 2, 1];
// [0]
// console.log([...nums.slice(0,1), nums[4], ...nums.slice(1)])
// console.log([...nums.slice(0,2), nums[3], ...nums.slice(2)])

/*
1773. Count Items Matching a Rule
Input: items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
Output: 1
*/

// var countMatches = function (items, ruleKey, ruleValue) {
//   let count = 0;
//   let key;
//   key = ruleKey === "type" ? 0 : ruleKey === "color" ? 1 : 2;
//   items.map((item) => {

//     item.filter((i,j) => {
//       if (i === ruleValue && j===key) {
//         count++;
//       }
//     });
//   });
//   return count;
// };
var countMatches = function (items, ruleKey, ruleValue) {
  let key;
  key = ruleKey === "type" ? 0 : ruleKey === "color" ? 1 : 2;
  let ans = items.filter((item) => item[key] === ruleValue).length;
  return ans;
};

const items = [
  ["phone", "blue", "pixel"],
  ["computer", "silver", "lenovo"],
  ["silver", "silver", "silver"],
  ["phone", "gold", "phone"],
];
// console.log(countMatches(items, "type", "phone"));

/*
2006. Count Number of Pairs With Absolute Difference K
Input: nums = [1,2,2,1], k = 1
Output: 4
*/

var countKDifference = function (nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      // let ck = Math.abs(nums[i] - nums[j]);

      if (Math.abs(nums[i] - nums[j]) === k) {
        count++;
      }
    }
  }
  return count;
};

// console.log(countKDifference([1, 2, 2, 1], 1));
// let item = 'abcdf'
// console.log(item.replace(item[0],item[0].toUpperCase()))

function RotateArray(numbers) {
  // console.log(numbers[1]);
  // Write your code here
  // let temp = numbers[numbers.length - 1];
  // let j = 1;
  // numbers[1] = numbers[0]
  // numbers[0] = numbers[temp];
  // for (let i = 1; i < numbers.length; i++) {
  //   // numbers.push()
  //   //
  //   console.log(i + " " + j + " "+ numbers[i] + " "+ numbers[j]);
  //   numbers[j] = numbers[i]; //5
  //   j++;
  //   // console.log(numbers[j])
  // }
  // console.log(numbers)
  // for(let i=0;i<numbers.length;i++){
  //   console.log(i)
  // }
  // console.log([ numbers.length-1,...numbers.slice(0, numbers.length-1)])
  // console.log(numbers);
}
// console.log()
RotateArray([0, 1, 2, 3, 4, 5]);
/*
2037. Minimum Number of Moves to Seat Everyone
Input: seats = [3,1,5], students = [2,7,4]
Output: 4
*/
var minMovesToSeat = function (seats, students) {
  const sortedSeat = seats.sort((a, b) => a - b);
  const sortedStudent = students.sort((a, b) => a - b);
  let sum = 0;
  sortedSeat.map((i, j) => (sum += Math.abs(i - sortedStudent[j])));
  return sum;
};
// console.log(minMovesToSeat([2, 2, 6, 6], [1, 3, 2, 6]));

/* 1588. Sum of All Odd Length Subarrays
Input: arr = [1,4,2,5,3]
Output: 58
*/
var sumOddLengthSubarrays = function (arr) {
  let sum = 0;
  let iteration = Math.floor(arr.length / 2);
  let len = arr.length;
  let isum = arr.reduce((acc, curr) => acc + curr, 0);

  //
  for (let i = 1; i <= iteration - 1; i++) {
    // if (i !== 0 && i <= iteration - 1) {
    // let m = i === 1 ? ( i) : ( i+1);
    // console.log({ iteration, len, i, M:(2*i + 1) });

    for (let j = 0; j < arr.length - (2*i); j++) {
      for (let k = j; k < j + 2 * i + 1; k++) {
        sum += arr[k % len];
        // console.log("arr[k]=" + arr[k % len]);
      }
      // console.log("sum:" + sum);
    }
    // }
  }

  return len === 1 ? isum : len % 2 === 1 ? (sum += isum * 2) : (sum += isum);
};

// console.log(sumOddLengthSubarrays([6, 9, 14, 5, 3, 8, 7, 12, 13, 1]));

/*
1662. Check If Two String Arrays are Equivalent
Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
Output: true
*/
var arrayStringsAreEqual = function (word1, word2) {

  return word1.join("") === word2.join("")
};
console.log(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"]));