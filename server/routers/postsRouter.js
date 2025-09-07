import { Router } from "express";
import { readAllPosts } from "../controllers/postController";

const postsRouter = Router();

postsRouter.get("/", readAllPosts);
postsRouter.get("/:id", (req, res) => {});
postsRouter.get("/create", (req, res) => {});
postsRouter.get("/update/:id", (req, res) => {});
postsRouter.get("/delete/:id", (req, res) => {});

export default postsRouter;
