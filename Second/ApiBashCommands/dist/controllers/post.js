"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPost = void 0;
const POST = [];
const createPost = (req, res, next) => {
    var something = req.body;
    // const title = (req.body as {title:string}).title;
    // const description = (req.body as {description:string}).description;
    // var  _date = (req.body as {date:string}).date;
    let id = 0;
    id += id;
    something.setId(id.toString());
    POST.push(something);
    res.status(201).json({ message: 'Congrats, you posted some nice!!' });
};
exports.createPost = createPost;
