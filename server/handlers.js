"use strict";

const { v4: uuidv4 } = require("uuid");
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const postCourse = async (req, res) => {
    console.log(req.body);
    const courseData = {
        _id: uuidv4(),
        courseData: req.body
    }

    const client = await new MongoClient(MONGO_URI, options);
    try{
        client.connect();
        console.log("connected!");
        const db = client.db('db-name');
        const result = await db.collection("courses").insertOne(courseData);
        res.status(200).json({ status: 200, result: result })
        client.close();
        console.log("disconnected!");
    }
    catch (e){
        res.status(400).json({ status: 400, message: e.message })
    }
}

const getUsers = async (req, res) => {
    const client = await new MongoClient(MONGO_URI, options);
    try{
        client.connect();
        console.log("connected!");
        const db = client.db('db-name');
        const result = await db.collection("users").find().toArray();
        res.status(200).json({ status: 200,result: result })
        client.close();
        console.log("disconnected!");
    }
    catch (e){
        res.status(400).json({ status: 400, message: e.message })
    }
}

const getCoursesFromOwner = async (req, res) => {
    const client =  new MongoClient(MONGO_URI, options);
    try{
        const courseOwner = req.params.courseOwner;
        // ---- Client connected ---- //
        client.connect();
        
        const db = client.db('db-name');
        // find item that are matching with id
        const result = await db.collection("courses").find({ "courseData.courseOwner": courseOwner }).toArray(); 
        res.status(200).json({ status: 200, result: result })
        // ---- Client disconnected ---- // 
        client.close();
    }
    catch (e){
        // else if error -->
        res.status(400).json({ status: 400, message: e.message })
    }
}

const getCoursesFromCategory = async (req, res) => {
        const client =  new MongoClient(MONGO_URI, options);
    try{
        const courseCategory = req.params.courseCategory;
        // ---- Client connected ---- //
        client.connect();
        
        const db = client.db('db-name');
        // find item that are matching with id
        const result = await db.collection("courses").find({ "courseData.courseCategory": courseCategory }).toArray(); 
        res.status(200).json({ status: 200, result: result })
        // ---- Client disconnected ---- // 
        client.close();
    }
    catch (e){
        // else if error -->
        res.status(400).json({ status: 400, message: e.message })
    }
}

const getAllCourses = async (req, res) => {
        const client =  new MongoClient(MONGO_URI, options);
    try{
        // ---- Client connected ---- //
        client.connect();
        console.log("connected")
        
        const db = client.db('db-name');
        const result = await db.collection("courses").find().toArray(); 
        res.status(200).json({ status: 200, result: result })
        // ---- Client disconnected ---- // 
        client.close();
        console.log("disconnected")
    }
    catch (e){
        // else if error -->
        res.status(400).json({ status: 400, message: e.message })
    }
}

const getCourse = async (req, res) => {
    const client =  new MongoClient(MONGO_URI, options);
    try{
        const _id = req.params.courseId;
        // ---- Client connected ---- //
        client.connect();
        
        const db = client.db('db-name');
        // find item that are matching with id
        const result = await db.collection("courses").find({ "_id": _id }).toArray();
        res.status(200).json({ status: 200, result: result[0].courseData.courseContent })
        // ---- Client disconnected ---- // 
        client.close();
    }
    catch (e){
        // else if error -->
        res.status(400).json({ status: 400, message: e.message })
    }
}

const patchCourse = async (req, res) => {
    const _id = req.params.courseId;
    const newValues = { $set: { "courseData.courseContent": req.body.editorData } };
    const client = new MongoClient(MONGO_URI, options);

    try {
    const query = {"_id": _id};
    await client.connect();
    console.log("connected!");
    const db = client.db('db-name');
    const result = await db.collection("courses").updateOne(query, newValues);
    console.log(result);
    res.status(201).json({ status: 201, message: "The course was updated." });
    } catch (e) {
    res.status(500).json({ status: 500, message: e.message });
    }
    client.close();
    console.log("disconnected");
}

module.exports = {
    postCourse,
    getUsers,
    getCoursesFromOwner,
    getCoursesFromCategory,
    getAllCourses,
    getCourse,
    patchCourse
};