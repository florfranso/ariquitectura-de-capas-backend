import mongoose from 'mongoose';

const carritosCollection = 'carritos';

const carritosSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    productos: {
        type: [],
        require: true
    }
})

const CarritoModel = mongoose.model(carritosCollection, carritosSchema);

export { CarritoModel }