import express from "express";
import { crateUser } from "../controllers/users.js";

const userRouter = express.Router();

userRouter.post("/", crateUser);

export { userRouter };
