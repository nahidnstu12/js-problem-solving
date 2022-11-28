const arr2 = [
  {
    id: 1,
    timeslot: "10-10:45",
    weekday: "Friday",
    course_code: "CSTEab8d51",
    course_name: "est",
    t_id: "5af1b2",
    teacher_name: "Miss Rozella Gutmann",
    yt: "Y3-T2",
    created_at: "2022-02-18T12:11:53.000000Z",
    updated_at: "2022-02-18T12:11:53.000000Z",
  },
];

const groupWeek = arr2.reduce((acc, curr) => {
  const { weekday } = curr;
  acc[weekday] = acc[weekday] ?? [];
  // console.log("debug ->",acc[weekday]);

  acc[weekday].push(curr);
  return acc;
}, {});
// console.log(groupWeek);
const timeSlotArray = [
  "9-9:45",
  "10-10:45",
  "11-11:45",
  "12-12:45",
  "2-2:245",
  "3-3:45",
  "4-4:45",
];

const ids = groupWeek["Friday"].map((item) => item.timeslot);
// console.log(ids);
const filtered = groupWeek["Friday"].filter(
  ({ timeslot }, index) => !ids.includes(timeslot, index + 1)
);
// console.log(filtered);

const friday = [];
let flag = 0;
for (time of timeSlotArray) {
  for (course of filtered) {
    if (time === course.timeslot) {
      friday.push(course);
      //   console.log(time)
      flag = 1;
    }
  }
  flag === 0 ? friday.push({}) : (flag = 0);
}
// console.log(friday);
/**
 *
 * @param {array} week
 * @param {array} arr
 * @returns {array}
 */
const sortedWeekdata = (week, arr) => {
  const ids = week.map((item) => item.timeslot);
  // console.log(ids);
  const filtered = week.filter(
    ({ timeslot }, index) => !ids.includes(timeslot, index + 1)
  );
  for (time of timeSlotArray) {
    for (course of filtered) {
      if (time === course.timeslot) {
        arr.push(course);
        //   console.log(time)
        flag = 1;
      }
    }
    flag === 0 ? arr.push({}) : (flag = 0);
  }
  return arr;
};
// console.log(sortedWeekdata(groupWeek["Friday"], []));
// console.log(sortedWeekdata(groupWeek["Sunday"], []));
// console.log(Object.keys(groupWeek));
// ["Friday", "Tuesday", "Saturday", "Sunday", "Wednesday", "Monday", "Thusday"];

// todo prbs
// console.log(timeSlotArray.filter((_, i) => i !== 1));
// console.log(arr.filter((item) => item.yt.toLowerCase().startsWith("Y3".toLowerCase())))
const state = {
  todos: [
    { id: 1, title: "test 1" },
    { id: 2, title: "test 2" },
    { id: 3, title: "test 3" },
  ],
  search: [],
};

const newtodo = { id: 3, title: "test 3" };
// state.todos.push(newtodo)
// const newState = {...state, todos: [...state.todos, newtodo] }
// console.log(state)
// console.log(state.todos.filter((_, i) => i !== 1));
// console.log(typeof(false));

// 12.Remove duplicate items in array
let arr = [1, 2, 2, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
let result = arr.sort().reduce((accumulator, current) => {
  const length = accumulator.length;
  if (length === 0 || accumulator[length - 1] !== current) {
    accumulator.push(current);
  }
  return accumulator;
}, []);
// console.log(result);

//1. rowsum //cloumn sum
var matrix = [
  [1, 2, 3],
  [7, 2, 6],
];

// sums of rows
var rowSum = matrix.map((r) => r.reduce((a, b) => a + b));

// sums of columns
var colSum = matrix.reduce((a, b) => a.map((x, i) => x + b[i]));

console.log(
  arr.reduce((a, b) => {
    let c = a+b;
    console.log({ a, b, c });
  }, 0)
);
// console.log(colSum);
