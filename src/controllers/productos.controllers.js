import { getProductos, addProducto, getProductById, updateProduct, deleteProductById, deleteAllProducts } from "../services/productos.services.js"

const getProductosControllers = async (req, res) => {
    let productos = await getProductos()
    res.json(productos)
}

const postProductosControllers = async (req, res) => {
    let nuevoProducto = req.body;
    await addProducto(nuevoProducto);
    res.json({nuevoProducto})
}

const getByIdProductosControllers = async (req, res) => {
    let productId = req.params;
    const product = await getProductById(productId.id)
    res.json(product)
}

const updateProductosControllers = async (req, res) => {
    const id = req.params.id;
    const data = req.body
    await updateProduct(id, data)
    res.json({msj: 'datos de productos enviados'})
}

const deleteProductByIdControllers = async (req, res) => {
    const id = req.params.id;
    await deleteProductById(id)
    res.json({msj: 'producto borrado'})
}

const deleteAllProductsControllers = async (req, res) => {
    await deleteAllProducts();
    res.json({msj: 'todos los productos borrados'})
}

export {getProductosControllers, postProductosControllers, getByIdProductosControllers, updateProductosControllers, deleteProductByIdControllers, deleteAllProductsControllers}