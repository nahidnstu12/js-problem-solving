// changeEnough([2, 100, 0, 0], 14.11) ➞ false
// changeEnough([0, 0, 20, 5], 0.75) ➞ true
// changeEnough([30, 40, 20, 5], 12.55) ➞ true

function changeEnough(change,amount){
    var sum = 0;
    let currency = [.25, .1, .05, .01]
    for(var i=0; i< change.length; i++) {
        sum += change[i]*currency[i];
    }
    return sum >= amount ? true : false
}

function changeEnough(change,amount){
    let currency = [.25, .1, .05, .01]

    const sum_products = change.reduce((sum, val, i) => sum + (val * currency[i]), 0)

    return sum_products >= amount ? true : false
}


console.log(changeEnough([2, 100, 0, 0], 14.11))