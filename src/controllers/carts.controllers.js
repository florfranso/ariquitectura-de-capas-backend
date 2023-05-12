import { getCarritos, addCarrito, getCarritoById, updateCarrito, deleteCarritoById, deleteAllCarritos } from "../services/carts.service.js"
import { getProductById } from "../services/product.service.js"

const getCarritosControllers = async (req, res) => {
    let carritos = await getCarritos()
    res.json(carritos)
}

const postCarritosControllers = async (req, res) => {
    let nuevoCarrito = req.body;
    await addCarrito(nuevoCarrito);
    res.json({msj: 'Nuevo carrito creado'})
}

const getByIdCarritosControllers = async (req, res) => {
    let carritoId = req.params;
    const carrito = await getCarritoById(carritoId.id)
    res.json(carrito)
}

const updateCarritosControllers = async (req, res) => {
    let id = req.params.id
    id = parseInt(id)
    const carrito = await getCarritoById(id)
    let productoId = req.body.id
    const producto = await getProductById(productoId)
    await updateCarrito(carrito, producto)
    res.json({msj: 'datos de carrito enviados'})
}

const deleteCarritoByIdControllers = async (req, res) => {
    const id = req.params.id;
    await deleteCarritoById(id)
    res.json({msj: 'carrito borrado'})
}

const deleteAllCarritosControllers = async (req, res) => {
    await deleteAllCarritos();
    res.json({msj: 'todos los carritos borrados'})
}

export { getCarritosControllers, postCarritosControllers, getByIdCarritosControllers, updateCarritosControllers, deleteCarritoByIdControllers, deleteAllCarritosControllers }
