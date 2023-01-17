/**
 * 10 items of array
 * [{name: 'abc', age: 10, type: 'student'}]
 */

// import { courseModules } from "./dummy-data";
// const courseModules = require("./dummy-data")

const courseModules = [
  {
    id: 63,
    title: "Next Api",
    module_type: 1,
    sl_no: 1,
    is_final_assessment: null,
    is_complete: 0,
    courseLessons: [],
  },
  {
    id: 46,
    title: "React Intro",
    module_type: 1,
    sl_no: 1,
    is_final_assessment: null,
    is_complete: 0,
    courseLessons: [
      {
        id: 53,
        title: "SSR Intro",
        lesson_type: 1,
        sl_no: 1,
        is_complete: 0,
      },
    ],
  },
  {
    id: 61,
    title: "Next Routing",
    module_type: 1,
    sl_no: 5,
    is_final_assessment: null,
    is_complete: 0,
    courseLessons: [
      {
        id: 41,
        title: "Routing in next js",
        lesson_type: 2,
        sl_no: 1,
        is_complete: 0,
      },
      {
        id: 42,
        title: "Next Link",
        lesson_type: 1,
        sl_no: 2,
        is_complete: 0,
      },
      {
        id: 43,
        title: "Next Router with Parametres",
        lesson_type: 3,
        sl_no: 3,
        is_complete: 0,
      },
      {
        id: 48,
        title: "Next Router Push 3",
        lesson_type: 2,
        sl_no: 5,
        is_complete: 0,
      },
      {
        id: 50,
        title: "Head in Next JS",
        lesson_type: 1,
        sl_no: 6,
        is_complete: 0,
      },
    ],
  },
  {
    id: 51,
    title: "Components In React blog writitng",
    module_type: 3,
    sl_no: 7,
    is_final_assessment: null,
    is_complete: 0,
    courseLessons: [],
  },
  {
    id: 62,
    title: "Data Fetching",
    module_type: 2,
    sl_no: 8,
    is_final_assessment: false,
    is_complete: 0,
    courseLessons: [],
  },
  {
    id: 66,
    title: "Next Api Postmaan",
    module_type: 2,
    sl_no: 9,
    is_final_assessment: false,
    is_complete: 0,
    courseLessons: [],
  },
  {
    id: 56,
    title: "Authentication FLow",
    module_type: 2,
    sl_no: 65534,
    is_final_assessment: true,
    is_complete: 0,
    courseLessons: [],
  },
];

const messages = [
  {
    id: "message-1",
    text: "Hey folks!",
    userId: "user-1",
  },
  {
    id: "message-2",
    text: "Hi",
    userId: "user-2",
  },
  {
    id: "message-3",
    text: "How are you?",
    userId: "user-1",
  },
  {
    id: "message-4",
    text: "How was the week.",
    userId: "user-1",
  },
  {
    id: "message-5",
    text: "I'm fine",
    userId: "user-1",
  },
  {
    id: "message-6",
    text: "Great!",
    userId: "user-3",
  },
];

const users = [
  {
    id: "user-1",
    name: "Paul",
  },
  {
    id: "user-2",
    name: "Lisa",
  },
  {
    id: "user-3",
    name: "Marc",
  },
];

// const namesById = new Map(users.map(({ id, name }) => [id, name]));

// let userlists = new Map([[users[0].id, messages[0]], [users[1].name, messages[1]]])
function printMap() {
  courseModulesMap.forEach((item, id) => {
    console.log(`${item.title} - ${id}`);
    if (item?.courseLessons?.length > 0) {
      item?.courseLessons?.map((lesson) =>
        console.log(`[${lesson.title} - ${lesson.id}]`)
      );
    }
  });
}
let courseModulesMap = new Map(courseModules.map((item) => [item.id, item]));
/**
 * course module & lesson travers at id
 */
// courseModulesMap.forEach((item, id) => {
//   console.log(`${item.title} - ${id}`);
//   if (item.courseLessons.length > 0) {
//     item?.courseLessons?.map((lesson) =>
//       console.log(`[${lesson.title} - ${lesson.id}]`)
//     );
//   }
// });

/**
 * item add temporarily
 */
const newModules = { id: -1, title: "NextJS Middleware", module_type:1 };
const newModules2 = { id: -1, title: "NextJS Middleware 2", module_type:1 };
const newLesson = { id: -1, title: "NextJS Middleware Lesson", lesson_type:4 };
courseModulesMap.set(newModules.id, newModules);
courseModulesMap.set(newModules.id, newModules);
let updateModule = courseModulesMap.get(46)
let updateLesson = updateModule?.courseLessons?.push(newLesson)
// courseModulesMap.set(46, [...updateLesson,updateLesson?.courseLessons?.push(newLesson)]);
courseModulesMap.set(46, updateModule)
// printMap()

/**
 * item remove
 */
courseModulesMap.delete(-1)
const updatedLesson = updateModule.courseLessons.filter(i => i.id > 0)
courseModulesMap.set(46, {...updateModule,courseLessons:updatedLesson})

// printMap()
console.log(updateModule);
