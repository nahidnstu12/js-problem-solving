// findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]

function findLargestNums(arr){
    let arr2 = []
    let [a1,a2,a3] = arr
    arr2.push(Math.max(...a1),Math.max(...a2),Math.max(...a3))
    
    return arr2
}

// console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]))


// findLargestNumsSection([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [20, 70, 40, 90]
function findLargestNumsSection(arr){
    
    let [a1,a2,a3] = arr
    let b1,b2,b3
    b1 = Math.max(...a1)
    b2 = Math.max(...a2)
    b3 = Math.max(...a3)

   return b1 > b2 ? ( b1> b3 ?  a1 :  a3) : ( b2 > b3 ? a2 : a3)
}
console.log(findLargestNumsSection([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]))
// output       [ 20, 70, 40, 90 ]
