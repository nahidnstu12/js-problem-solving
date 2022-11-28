/**
 * safecracker(0, [3, 10, 5]) ➞ [97, 7, 2]
 * Starting dial position of 0 (same as the diagram above).

 * First turn (rightward) of 3 increments:
   0 -> 99, 98, 97
   First number of combination = 97

 * Second turn (leftward) of 10 increments:
  97 -> 98, 99, 0, 1, 2, 3, 4, 5, 6, 7
  Second number of combination = 7

 * Third turn (rightward) of 5 increments:
  7 -> 6, 5, 4, 3, 2
  Third number of combination = 2

 * The final combination is [97, 7, 2]
*/
// safecracker(96, [54, 48, 77]) ➞ [42, 90, 13]
// safecracker(43, [51, 38, 46]) ➞ [92, 30, 84]
// safecracker(4, [69, 88, 55]) ➞ [35, 23, 68]

function safecracker(start, increments) {
    let crack = []
	let [a,b,c] = increments
    a = start - a > 0 ? start - a : start - a + 100
    crack.push(a)
    b = a + b < 99 ? a + b : a + b - 100
    crack.push(b)
    c = b - c > 0 ? b - c : b - c + 100
    crack.push(c)
    return crack
}

console.log(safecracker(96, [54, 48, 77]))
console.log(safecracker(43, [51, 38, 46]))
console.log(safecracker(4, [69, 88, 55]))