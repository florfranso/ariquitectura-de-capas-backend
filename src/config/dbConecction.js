import mongoose from 'mongoose';
import options from './options.js';
import {logger} from "../loggers/loggers.js";

const connectDB = async()=>{
    try {
      await  mongoose.connect(options.mongoDB.url);
      logger.info("base de datos conectada con éxito");
    } catch (error) {
        logger.info("hubo un error al conectarse a la base de datos");
    }
}

export default connectDB;


