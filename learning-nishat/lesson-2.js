//  for(var i =5; i < 10; i=i+2){
//      console.log(i)
//  }

// var i=0;
// while(i<11){
//     console.log("ok")
//     i=i+5;
// }
var string = ''
for(var i=1;i<5;i++){
    for(var j=0;j<5-i;j++){
        // console.log("*")
        string+= " "
    }
    for(var k = 0; k<i;k++){
        string+="*"
    }
    string += "\n";
}
// console.log(string)

var name = [5,2,6,7,8,2]
// console.log(name[2])
var sum =0;
for(var i=0; i< name.length;i++){
    
    sum= sum+name[i]
    name[3] = 10
    console.log(name[i] +" "+ sum)
}
console.log(sum)
console.log(name)


