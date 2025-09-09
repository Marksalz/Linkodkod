import { Router } from "express";
import postsCtrl from "../controllers/postController.js";
import multer from "multer";

const postsRouter = Router();

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     return cb(null, "./public");
//   },
//   filename: function (req, file, cb) {
//     return cb(null, file.originalname);
//   },
// });

// const upload = multer({ storage });
//upload.single("imgSrc"),

postsRouter.get("/", postsCtrl.readAllPosts);
postsRouter.get("/:id", postsCtrl.readPostById);
postsRouter.post("/create", postsCtrl.createPost);
postsRouter.put("/update/:id", postsCtrl.updatePost);
postsRouter.delete("/delete/:id", postsCtrl.deletePost);

export default postsRouter;
