import mongoose from 'mongoose';
import options from './options.js';
import {logger} from "../loggers/loggers.js";

const connectDB = async()=>{
    try {
      await  mongoose.connect(options.mongoDB.url);
      logger.log("base de datos conectada con éxito");
    } catch (error) {
        logger.log("hubo un error al conectarse a la base de datos");
    }
}

export default connectDB;



//mongoose.set('strictQuery', false);
