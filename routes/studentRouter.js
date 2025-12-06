import express from "express"

import { createStudent, deleteStudent, getStudent, updateStudent } from "../controllers/studentController.js";


const studentRouter = express.Router();

studentRouter.get("/",getStudent);

studentRouter.post("/",createStudent);


studentRouter.delete("/",deleteStudent);

studentRouter.put("/",updateStudent);

export default studentRouter;