/**
 * IsUnique | Helol => false
 * @param {string} str
 */
const isUniq = (str) => {
  //app 1
  // const set = new Set(str)
  // return set.size === str.length;

  // app 2
  const charray = str.split("").sort();
  for (let i = 0; i < charray.length - 1; i++) {
    if (charray[i] !== charray[i + 1]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

/**
 * check Permutation | "abbab", "bbaaa" => false
 * @param {string} str1
 * @param {string} str2
 */
const checkPermutation = (str1, str2) => {
  // app 1
  let array1 = str1.split("");
  let array2 = str2.split("");
  array1 = array1.sort();
  array2 = array2.sort();
  console.log({ array1, array2 });
  return (
    array1.length === array2.length &&
    array1.every((value, index) => value === array2[index])
  );

  //   app 2
};
/**
 * URLify | "  Mr. Mazharul Islam   " => Mr.%20Mazharul%20Islam
 * @param {string} str
 */
const URLify = (str) => {
  return str.trim().replace(/ /g, "%20");
};
/**
 *
 * @param {string} str1
 * @param {string} str2
 */
const oneAway = (str1, str2) => {};

const stringRotation = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  if (str1.length === 0 && str2.length === 0) return false;
  const s1s2 = str1 + str1;
  for (let i = 0; i <= str2.length; i++) {
    console.log({ s1: s1s2.substring(i, str2.length + i), str2 });
    if (s1s2.substring(i, str2.length + i) === str2) {
      return true;
    }
  }
  return false;
};

const stringComression = (str) => {
  let compres = "";
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      compres += count === 1 ? str[i] : str[i] + count;
      count = 1;
    }
  }
  return { compres: compres.length >= str.length ? str : compres, str };
};
//  output
// console.log(isUniq("Helol"));

// console.log(checkPermutation("abbab", "bbaaa"));

// console.log(URLify("  Mr. Mazharul Islam   "));
// console.log(stringRotation("waterbottle", "erbottlewta"));
// console.log(stringComression("aaaabbbbeeewwssaaaabb"));
console.log(stringComression("aababc"));
