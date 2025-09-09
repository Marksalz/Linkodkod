import { Router } from "express";
import authCtrl from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/signup", authCtrl.registerUser);
authRouter.post("/login", authCtrl.loginUser);

export default authRouter;
