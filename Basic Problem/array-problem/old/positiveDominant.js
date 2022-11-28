// isPositiveDominant([1, 1, 1, 1, -3, -4]) ➞ false
// // There is only 1 unique positive value (1).
// // There are 2 unique negative values (-3, -4).
// isPositiveDominant([5, 99, 832, -3, -4]) ➞ true
// isPositiveDominant([5, 0]) ➞ true
// isPositiveDominant([0, -4, -1]) ➞ false
/**
 * [1,-3,-4]
 * 
 */
function isPositiveDominant(arr){
    let uniq

    // uniqueArray using filter

    // uniq = arr.filter(function(item, pos) {
    //     return arr.indexOf(item) == pos;
    // })
    // return uniq

    uniq = [... new Set(arr)]        // uniqueArray using SET()
    let positive = uniq.filter(a => a > 0)
    let negative = uniq.filter(a => a < 0)
    return negative.length >= positive.length ? false : true
}

console.log(isPositiveDominant([52, 52, 52, -3, 2, 2, 2, -4]))