const obj = {
  a: {
    m: { c: ["x", "y"] },
    // n: { 2: ["AA", "BB"], 1: 1 },
    n: { 2: "BB", 1: 1 },
    o: { 4: 4, 5: 5 },
  },
  b: {
    s: "S",
    t: "T",
    u: "U",
  },
};
// const findPath = (obj, data) => {
// let path = obj.find(o => o?.a?.n["2"] === data)
// return path
// }
function getObject(theObject, data) {
  var result = null;
  if (theObject instanceof Array) {
    for (var i = 0; i < theObject.length; i++) {
      result = getObject(theObject[i]);
      if (result) {
        break;
      }
    }
    // console.log({result})
  } else {
    for (var prop in theObject) {
    //   console.log(prop + ": " + theObject[prop]);
      if (prop == 2) {
          console.log({p: theObject[prop], prop})
        if (theObject[prop] == data) {
            console.log({prop, data})
            console.log(prop + ": " + theObject[prop]);
          return theObject;
        }
        // else{
        //     console.log({ prop, data });
        // }
      }
      if (
        theObject[prop] instanceof Object ||
        theObject[prop] instanceof Array
      ) {
        result = getObject(theObject[prop]);
        if (result) {
          break;
        }
      }
    }
  }
  return result;
}
console.log(getObject(obj, "BB"));
