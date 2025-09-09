import { Router } from "express";
import postsRouter from "./routers/postsRouter.js";
import authRouter from "./routers/authRouter.js";
const router = Router();

router.use("/posts", postsRouter);
router.use("/auth", authRouter);

export default router;
