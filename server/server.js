const express = require("express");
const morgan = require("morgan");


const {
    postCourse,
    getUsers,
    getCoursesFromOwner,
    getAllCourses,
    getCourse,
    patchCourse
} = require("./handlers");

express()
    .use(express.json())
    .get("/api/get-users", getUsers)
    .get("/api/get-all-courses", getAllCourses)
    .get("/api/get-courses/:courseOwner", getCoursesFromOwner)
    .get("/api/get-course/:courseId", getCourse)
    .post("/api/post-course", postCourse)
    .patch("/api/patch-course/:courseId", patchCourse)

    .listen(8000);
