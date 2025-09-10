import { Router } from "express";
import postsCtrl from "../controllers/postController.js";
import { authenticate } from "../middleware/authenticate.js";
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

postsRouter.get("/", authenticate, postsCtrl.readAllPosts);
postsRouter.get("/:id", authenticate, postsCtrl.readPostById);
postsRouter.post("/create", authenticate, postsCtrl.createPost);
postsRouter.put("/update/:id", authenticate, postsCtrl.updatePost);
postsRouter.delete("/delete/:id", authenticate, postsCtrl.deletePost);

export default postsRouter;
