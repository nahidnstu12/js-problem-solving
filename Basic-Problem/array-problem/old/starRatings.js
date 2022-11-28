// starRating([55, 67, 98, 115, 61]) ➞ "[3.15] ***"
// starRating([0, 2, 0, 1, 23]) ➞ "[4.73] *****"
// starRating([16, 17, 23, 40, 45]) ➞ "[3.57] ****"

function starRating(arr){
    let stars = [1,2,3,4,5]
    const rating_point = arr.reduce((sum, val, i) => sum + (val * stars[i]), 0)
    const total_votes = arr.reduce((a,b) => a+b)
    let star = (rating_point / total_votes).toFixed(2)
    star = `[${star}] ${'*'.repeat(Math.round(star))}`
    return star
}

console.log(starRating([0, 2, 0, 1, 23]))