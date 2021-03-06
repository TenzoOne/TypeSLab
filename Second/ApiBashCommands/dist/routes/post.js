"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const post_1 = require("../controllers/post");
const router = (0, express_1.Router)();
router.post('/', post_1.createPost);
router.get('/');
router.patch('/:id');
router.delete('/:id');
exports.default = router;
