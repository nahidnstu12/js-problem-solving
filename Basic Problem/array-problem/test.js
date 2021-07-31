const COURSE_CREATE_SUCCESS = "COURSE_CREATE_SUCCESS";
 const LOAD_COURSE = "LOAD_COURSE_SUCCESS";
 const LOAD_AUTHORS = "LOAD_AUTHORS_SUCCESS";
 const UPDATE_COURSE_SUCCESS = "UPDATE_COURSE_SUCCESS";

function actionTypeEndsInSuccess(type) {
    return type.substring(type.length - 8) === "_SUCCESS" ? "OKK" : "Fail";
}
console.log(actionTypeEndsInSuccess(UPDATE_COURSE_SUCCESS))