import path from 'path';
import minimist from 'minimist';
import dotenv from 'dotenv';
dotenv.config();

//definir argumentos y valores por defecto
const argOptions = { alias: { m: "modo", p: "port" }, default: { modo: "FORK", port: 8080 } };

const objArguments = minimist(process.argv.slice(2), argOptions);
// console.log(objArguments);



const options = {
   /* mariaDB: {
        client: "mysql",
        connection: {
            host: "127.0.0.1",
            user: "root",
            database: "MiPrimerDB"
        }
    },*/
    fileSystem: {
        path: './DB'
    },
    sqliteDB: {
        client: "sqlite",
        connection: {
            filename: path.join("../DB/chatdb.sqlite")
        },
        useNullAsDefault: true
    },

    server: {
        MODO: objArguments.modo,
        PORT: objArguments.port
    },
    mongoDB: {
        url: process.env.DB_MONGO_URL
    }
}

export default options;



/*import path from "path";
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const options = {
    fileSystem: {
        pathProducts: 'productos.json',
        pathCarts: 'carritos.json',
    },
    // mariaDB:{
    //     client:"mysql",
    //     connection:{
    //         host:"127.0.0.1",
    //         user:"root",
    //         password:"",
    //         database:"coderhousedb"
    //     }
    // },
    sqliteDB:{
        client:"sqlite3",
        connection:{
            filename:path.join(__dirname , "../DB/ecommerce.sqlite")
        },
        useNullAsDefault:true
    },
    firebase:{
        serviceKey:{},
        databaseUrl:""
    },
    mongoDB:{
        url:"mongodb+srv://fredy:coder@coderbackend.d0kaklh.mongodb.net/ecommerceDB?retryWrites=true&w=majority"
    }
}*/