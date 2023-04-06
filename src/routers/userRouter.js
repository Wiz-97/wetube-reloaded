import express from "express";
import { deleteProfile, edit, logout, seeProfile } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/:id", seeProfile);
userRouter.get("/edit", edit);
userRouter.get("/delete", deleteProfile);
userRouter.get("/logout", logout);

export default userRouter;