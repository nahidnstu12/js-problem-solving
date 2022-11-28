// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

function toArray(obj){

    // return Object.keys(obj).map((key) => [key, obj[key]])

    return Object.entries(obj)
}

// console.log(toArray({ a: 1, b: 2 }))

// output       [ [ 'a', 1 ], [ 'b', 2 ] ]

