import express from "express"
import mongoose from "mongoose";
import studentRouter from "./routes/studentRouter.js";

let mongoURL = "mongodb+srv://admin:123@cluster0.cssurtc.mongodb.net/?appName=Cluster0"

mongoose.connect(mongoURL).then(
    ()=>{
        console.log("Connected to MongoDB successfully")
    }
)


const app = express()

function abc(){
    console.log("Server started at port 5000");
}

app.use(express.json())

app.use("/students",studentRouter);

app.listen(3000,()=>{
    console.log("Server is running")
})