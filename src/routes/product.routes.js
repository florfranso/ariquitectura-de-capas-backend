import express from 'express';
import { getProductosControllers, postProductosControllers, getByIdProductosControllers, updateProductosControllers, deleteProductByIdControllers, deleteAllProductsControllers } from '../controllers/productos.controllers.js';
const {Router} = express

const productosRouter = new Router()

productosRouter.get('/', getProductosControllers)
productosRouter.post('/', postProductosControllers)
productosRouter.get('/:id', getByIdProductosControllers)
productosRouter.put('/:id', updateProductosControllers)
productosRouter.delete('/:id', deleteProductByIdControllers)
productosRouter.delete('/', deleteAllProductsControllers)

export default productosRouter
