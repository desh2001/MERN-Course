import Student from "../models/Student.js";

export function getStudent(req,res){
    Student.find().then(
        (students)=>{
            res.json(students);
        }
    );
}



export function createStudent(req,res){
    console.log("Post Request Received at /students");
    console.log(req.body);

    const student = new Student(req.body);

    student.save().then(
        ()=>{
            res.json({
                message : "Student created successfully"
            })
        }
    );
}



export function deleteStudent(req,res){
    res.json({
        message : "Delete request at /students" + req.body.name,
    });
}



export function updateStudent(req,res){
    res.json({
        message : "Put request at /students" + req.body.name,
    });
}