// task 1   (BASKETBALL)
// var a = 0;
// var b = 8;
// var total=a*2 + b*3
// console.log(total);

// task2  (farming)

// var chik = 5;
// var cow = 2;
// var pig = 8;

// var chiken = chik*2;
// var cows = cow*4;
// var pigs = pig*4;

// var Totalanimal = (chiken + cows + pigs);

// console.log(Totalanimal);

// task3 (getting bigger number)

// var a = 10;
// var b = 4;
// var c = 50;

// if(a>b){
//     console.log(a + " is the bigger number");
// }

// else if(a>c){
//     console.log(b + " is the bigger number");
// }
// else if(b>a){
//     console.log(c + " is the bigger number");
// }
// else if(b>c){
//     console.log(c + " is the bigger number");
// }
// else if(c>a){
//     console.log(c + " is the bigger number");
// }
// else if(c>b){
//     console.log(c + " is the bigger number");
// }

// else{
//     console.log("its not a number");
// }

// simple sort
var a = 5;
var b = 6;
var c = 7;
// 1st
// if (a > 6) {
//   console.log(a);
// }

// 2nd
// if (a > 40) {
//     console.log("right");
// }else{
//     console.log("not")
// }

// if (a > 40) {
//   console.log('right');
// } else if (b === 8) {
//   console.log('same');
// } else {
//   console.log('not');
// }

// if (a > 4) {
//   if(b===6){
//       console.log("b")
//   }
//   else{
//       console.log("not b")
//   }
// } 
// else {
//   console.log('not');
// }

function asc(a, b, c) {
  // find smallest
  let x, y, z;
  if (a < b && a < c) {
    x = a;
    // if(b<c){
    //     y=b;
    //     z=c
    // }else{
    //     y=c;
    //     z=b
    // }
    y = b < c ? b:c
    z = b>c ? c : b
  } 
  else if (b < c && b < a) {
    x=b
    if(a<c){
        y=a
        z=c
    }
    else{
        y=c
        z=a
    }
  } 
  else if (c < a && c < b) {
    x=c
    if(a<b){
        y=a
        z=b
    }else{
        y=b
        z=a
        
    }
  } 
  else {
    return 'not a number';
  }
  console.log("Sorted Value: "+x + " " + y+ " "+ z)
  console.log("Main Value: "+a + " " + b+ " "+ c)
}
// console.log(asc(-12,-100,2))
// asc(12,-14,11)

var a= rem =65;
var n100,n50,n20,n10,n5,n2,n1,rem;
if(a / 100 >= 1){
  n100 = Math.floor(a/100)
  rem = a%100 //55
}else{
  n100 ="not 100 note"
}
if(rem /50 >= 1){
  n50 =parseInt(rem /50)
  rem = (rem%50) //45
}
if(rem /20 >= 1){
  n20 = Math.floor(rem /20)
  rem = (rem%20) //45
}
if(rem /10 >= 1){
  n10 = Math.floor(rem /10)
  rem = (rem%10) //45
}
else{
  n10 =" not 10 note available"
}
console.log(n100)
console.log(n50)
console.log(n20)
console.log(n10)
// console.log(rem)