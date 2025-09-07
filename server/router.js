import { Router } from "express";
import postsRouter from "./routers/postsRouter.js";
const router = Router();

router.use("/posts", postsRouter);

export default router;
