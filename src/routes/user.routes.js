//const express = require("express");
import express from 'express';

//importamos la capa de controlador
//const {getUsersController,postUserController} = require("../controllers/user.controller");
import {getUsersController, postUserController} from "../controllers/user.controllers.js"

const router = express();

//definir las rutas para usuarios
router.get("/",getUsersController);
router.post("/",postUserController);


//module.exports = {userRouter:router};
export {router as userRouter}