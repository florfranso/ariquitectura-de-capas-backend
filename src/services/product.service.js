import { productManager } from "../models/index.js";

const getProductos = async () => {
    return await productManager.getAll();
}

const addProducto = async (producto) => {
    await productManager.guardar(producto)
    return producto;
}

const getProductById = async (id) => {
    const producto = await productManager.getById(id)
    return producto;
}

const updateProduct = async (id, data) => {
    const productoActualizado = await productManager.actualizar(id, data);
    return productoActualizado
}

const deleteProductById = async (id) => {
    const productoBorrado = await productManager.deleteById(id);
    return productoBorrado
}

const deleteAllProducts = async () => {
    const borrarTodo = await productManager.deleteAll();
    return borrarTodo
}

export {getProductos, addProducto, getProductById, updateProduct, deleteProductById, deleteAllProducts}
