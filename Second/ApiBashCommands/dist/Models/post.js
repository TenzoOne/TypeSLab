"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
class Post {
    constructor(id, title, description, date) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = date;
    }
    setId(id) {
        this.id = id;
    }
}
exports.Post = Post;
