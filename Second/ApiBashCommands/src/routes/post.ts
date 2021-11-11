import { Router } from "express";
import { createPost } from "../controllers/post";

const router = Router();

router.post('/',createPost);
router.get('/');
router.patch('/:id');
router.delete('/:id');

export default router;