import { carritosManager } from "../model/index.js";

const getCarritos = async () => {
    return await carritosManager.getAll();
}

const addCarrito = async (producto) => {
    await carritosManager.guardar(producto)
    return producto;
}

const getCarritoById = async (id) => {
    const producto = await carritosManager.getById(id)
    return producto;
}

const updateCarrito = async (carrito, producto) => {
    const productoActualizado = await carritosManager.actualizar(carrito, producto);
    return productoActualizado
}

const deleteCarritoById = async (id) => {
    const productoBorrado = await carritosManager.deleteById(id);
    return productoBorrado
}

const deleteAllCarritos = async () => {
    const borrarTodo = await carritosManager.deleteAll();
    return borrarTodo
}

export { getCarritos, addCarrito, getCarritoById, updateCarrito, deleteCarritoById, deleteAllCarritos }
