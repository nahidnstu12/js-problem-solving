
function minmax(arr){
    let newarr = []
    newarr.push(Math.min(...arr),Math.max(...arr))
    return newarr
}

function minmax1(arr){
    let newarr = []
    arr.sort()
    newarr.push(arr[0],arr[arr.length-1])
    return newarr
}

console.log(minmax([10, 30, 20, 10,50,45,34,11]))
// output [10, 50]

