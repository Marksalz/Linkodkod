import { Router } from "express";
import authCtrl from "../controllers/authController.js";
import { authenticate } from "../middleware/authenticate.js";

const authRouter = Router();

authRouter.post("/signup",  authCtrl.registerUser);
authRouter.post("/login", authenticate, authCtrl.loginUser);

export default authRouter;
