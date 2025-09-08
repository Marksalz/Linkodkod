import { Router } from "express";
import postsCtrl from "../controllers/postController.js";

const postsRouter = Router();

postsRouter.get("/", postsCtrl.readAllPosts);
postsRouter.get("/:id", postsCtrl.readPostById);
postsRouter.post("/create", postsCtrl.createPost);
postsRouter.get("/update/:id", (req, res) => {});
postsRouter.get("/delete/:id", (req, res) => {});

export default postsRouter;
