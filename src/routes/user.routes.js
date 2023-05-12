import express from 'express';

//importamos la capa de controlador
import {getUsersController, postUserController} from "../controllers/user.controllers.js"


const userRouter = express.Router();

userRouter.get("/",getUsersController);
userRouter.post("/",postUserController);


export {userRouter}