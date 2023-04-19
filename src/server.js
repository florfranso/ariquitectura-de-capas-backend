import express from 'express';
import options from './config/options.js';
import connectDB from './config/dbConecction.js';
import handlebars from'express-handlebars';
import cookieParser from 'cookie-parser';
import session from 'express-session'
import MongoStore from 'connect-mongo';
import cluster from 'cluster';
import os from 'os';
const numCores = os.cpus().length;
import { fileURLToPath } from 'url';
import { dirname } from 'path';
//para poder usar los archivos de las vistas
import path, { join } from 'path'
//para poder usar los archivos de las vistas
//import path from 'path';
//import {logger} from "../loggers/loggers.js";
import passport from 'passport';


import {userRouter} from "./routes/user.routes.js";
/*import { cartsRouter } from "./routes/carritos.js";
import { productsRouter } from "./routes/products.js";*/


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express();
const PORT = options.server.PORT;
connectDB();

if (options.server.MODO === "CLUSTER" && cluster.isPrimary) {
    //modo cluster
    for (let i = 0; i < numCores; i++) {
        cluster.fork();
    };

    cluster.on("exit", (worker) => {
        console.log(`proceso ${worker.process.pid} murio`);
        cluster.fork();
    });
} else {
    //modo fork
    const server = app.listen(PORT, () => {
        console.log(`Servidor escuchando en puerto ${JSON.stringify(PORT)} con el proceso ${process.pid}`);
    })
    server.on('error', error => {
        console.error(`Error en el servidor ${error}`);
    })};

    //midlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('src/public'));

//configuracion template engine handlebars
app.set('views', 'src/views');
app.engine('.hbs', handlebars.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//configuracion de session
app.use(session({
    //store define el almacenamiento de las sesiones delos usuarios
    store:MongoStore.create({
        mongoUrl:options.mongoDB.url,
        ttl:600
    }),
    secret: process.env.SECRET_KEY,
    //definimos resave y saveunitialize en false para indicar que vamos a usar almacenamiento externo
    resave:false,
    saveUninitialized:false
}));

//configuracion de passport
app.use(passport.initialize()); //inicializamos passport
app.use(passport.session());


app.use("/api/users", userRouter);
//app.use('/api/productos', productosRouter)
//app.use('/api/carritos', carritosRouter)