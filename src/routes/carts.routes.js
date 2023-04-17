import express from 'express';
import { getCarritosControllers, postCarritosControllers, getByIdCarritosControllers, updateCarritosControllers, deleteCarritoByIdControllers, deleteAllCarritosControllers } from '../controllers/carritos.controllers.js';
const {Router} = express

const carritosRouter = new Router()

carritosRouter.get('/', getCarritosControllers)
carritosRouter.post('/', postCarritosControllers)
carritosRouter.get('/:id', getByIdCarritosControllers)
carritosRouter.put('/:id/productos', updateCarritosControllers)
carritosRouter.delete('/:id', deleteCarritoByIdControllers)
carritosRouter.delete('/', deleteAllCarritosControllers)

export default carritosRouter