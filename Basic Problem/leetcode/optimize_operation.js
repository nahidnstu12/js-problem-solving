/*
here we write code array operation and object operation
**/

//
/**
 * array operation
 * 1. Easily Traverse
 * 2. Filter
 * 3. Delete (medium) [splice -> O(n), filter -> O(n)]
 * 4. Update (medium) [push -> O(n)]
 * 5. Create a new one (easy) [push -> O(1), unshift -> O(n)]
 */

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// const students = [
//   { id: uuidv4(), name: "Asikur Rahamn", email: "asik@gmail.com" },
//   { id: uuidv4(), name: "Md Forhad", email: "forhad@gmail.com" },
//   { id: uuidv4(), name: "Rubel Uddin", email: "rubel@gmail.com" },
// ];

const students = [
  {
    id: "43ce34c9-fcc5-4c1d-a96f-842667ceb881",
    name: "Asikur Rahamn",
    email: "asik@gmail.com",
  },
  {
    id: "9efcf2fa-68e6-4fdb-8a5d-b9d722694ea0",
    name: "Md Forhad",
    email: "forhad@gmail.com",
  },
  {
    id: "0876012c-0229-4ef1-83e4-10abcb4a2709",
    name: "Rubel Uddin",
    email: "rubel@gmail.com",
  },
];

// create a student
const newStudent = {
  id: uuidv4(),
  name: "Asif Mahmud",
  email: "asif@mail.com",
};
// console.time("push")
// students.push(newStudent)
// console.log([...students,newStudent]);
// console.timeEnd("push");

// update a student
// console.time("update");
const idToUpdate = "9efcf2fa-68e6-4fdb-8a5d-b9d722694ea0";
const updateData = {
  name: "Kamruzzaman Forhad",
  email: "scair@mail.com",
};
const updatedIndex = students.findIndex((student) => student.id === idToUpdate);
students[updatedIndex] = { ...students[updatedIndex], ...updateData };
// console.log(students);
// console.timeEnd("update");

// delete student
// console.time("delete");
const idToDelete = "43ce34c9-fcc5-4c1d-a96f-842667ceb881";
const findIndex = students.findIndex((student) => student.id === idToDelete);
// students.splice(findIndex, 1);

// console.log([...students.slice(0,findIndex),...students.slice(findIndex,students.length-1)]);
// console.log(students);
// console.timeEnd("delete");

// traverse students
// students.map((item) =>
//   console.log(`Student Name: ${item.name} and Email:${item.email}`)
// );

// filter student
const filtered = students.filter((item) => item.id === idToDelete);
// console.log(filtered);
// filtered.length !== 0 ? console.log("hello "+filtered[0].name): console.log("None Exists");

for (let i in students) {
  // console.log(students[i].name);
}

for (let student of students) {
  // console.log(student.name);
}

//
/**
 * Object Operation
 * 1. Easily Traverse (O(n))
 * 1.1 Get anything if you have the Key: O(1)
 * 2. Filter
 * 3. Delete (medium) O(1)
 * 4. Update (medium) O(1)
 * 5. Create a new one (easy) O(1)
 */

const studentsObj = students.reduce((acc, cur) => {
  acc[cur.id] = {...cur}
  return acc
}, {});


// create a student
const newStudentObj = {
  id: uuidv4(),
  name: "Asif Mahmud",
  email: "asif@mail.com",
};
students.push(newStudentObj)
studentsObj[newStudentObj.id] = {...newStudentObj}
// console.log(studentsObj);
// console.log(students);

// update student
const updateId = "0876012c-0229-4ef1-83e4-10abcb4a2709";
const updateStudent = {
  name:"Rubel Hossain",
  // email:"hossain@mail.com"
}
studentsObj[updateId] = {...studentsObj[updateId],...updateStudent}

// delete student
// delete studentsObj[updateId];


// filter student
// tudentsObj[updateId].email;
for(let i in studentsObj){
// console.log("Your eamil is: "+studentsObj[i].email);
}
// console.log(studentsObj);

// converting obj to array
 Object.values(studentsObj).map(item => console.log(item.name))
