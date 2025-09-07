import { Router } from "express";
import postsRouter from "./server/routers/postsRouter";

const router = Router();

router.use("/posts", postsRouter);

export default router;
