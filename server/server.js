const express = require("express");
const morgan = require("morgan");


const {
    postCourse,
    getUsers,
    getCourses,
    getCourse,
    patchCourse
} = require("./handlers");

express()
    .use(express.json())
    .get("/api/get-users", getUsers)
    .get("/api/get-courses/:courseOwner", getCourses)
    .get("/api/get-course/:courseId", getCourse)
    .post("/api/post-course", postCourse)
    .patch("/api/patch-course/:courseId", patchCourse)

    .listen(8000);
