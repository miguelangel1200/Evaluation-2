import { Router } from "express";
import * as Controller from "./controller";

const userRouter = Router();

userRouter.route("/").get(Controller.findAllUser);
userRouter.route("/user").post(Controller.create);
userRouter.route("/login").post(Controller.login);

export default userRouter;
