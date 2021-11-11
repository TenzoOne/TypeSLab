import { RequestHandler } from "express";
import { Post } from "../Models/post";

const POST:Post[] = [];

export const createPost: RequestHandler= (req,res,next) =>
{   
    var something=req.body as Post;
    // const title = (req.body as {title:string}).title;
    // const description = (req.body as {description:string}).description;
    // var  _date = (req.body as {date:string}).date;
    let id = 0;
    id += id;

    something.setId(id.toString());

    POST.push(something);
    
    res.status(201).json({message:'Congrats, you posted some nice!!'});
};
