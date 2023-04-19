import express from 'express';

//importamos la capa de controlador
import {getUsersController, postUserController} from "../controllers/user.controllers.js"


const userRouter = express.Router();

//definir las rutas para usuarios
userRouter.get("/",getUsersController);
userRouter.post("/",postUserController);
userRouter.post('/login',);
userRouter.get('/home',);
userRouter.post('/register',);
userRouter.get('/perfil',);
userRouter.post('/perfil',);
//userRouter.get ("/logout", UsersLogoutController);


//module.exports = {userRouter:router};
export {userRouter}