import mongoose from 'mongoose';

const productCollection = 'productos';

const productsSchema = new mongoose.Schema({
    id: {
        type: Number,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    price: {
        type: String,
        require: true
    }
},
    {
        timestamps: true
    });

const ProductModel = mongoose.model(productCollection, productsSchema);

export { ProductModel }
