import express from "express";
const route = express.Router();
import {
  createStudent,
  deleteStudent,
  updateStudent,
  getStudent,
} from "../Controllers/Students.js";

//POST method
route.post("/createstudent", createStudent);

//PUT method
route.put("/update", updateStudent);

//GET method
route.get("/get", getStudent);

//DELETE method
route.delete("/delete/:id", deleteStudent);

export default route;
