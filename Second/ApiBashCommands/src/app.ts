import express, {Request,Response,NextFunction, response}  from "express";
import { json } from "body-parser";
import posts from "./routes/post";
const app = express();
app.use('/posts',posts)
app.use((err:Error,req:Request,res:Response,next:NextFunction)  => {
    res.status(500).json({message:err.message});
});

app.listen(3000);