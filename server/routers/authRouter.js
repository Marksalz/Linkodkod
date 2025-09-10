import { Router } from "express";
import authCtrl from "../controllers/authController.js";
import { authenticate } from "../middleware/authenticate.js";

const authRouter = Router();

authRouter.post("/signup", authCtrl.registerUser);
authRouter.post("/login", authCtrl.loginUser);
authRouter.post("/logout", authCtrl.logoutUser);

export default authRouter;
