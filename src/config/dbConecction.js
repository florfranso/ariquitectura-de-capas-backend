import mongoose from 'mongoose';
import options from './options.js';

const connectDB = async()=>{
    try {
      await  mongoose.connect(options.mongoDB.url);
      console.log("base de datos conectada con éxito");
    } catch (error) {
        console.log("hubo un error al conectarse a la base de datos");
    }
}

export default connectDB;



//mongoose.set('strictQuery', false);
