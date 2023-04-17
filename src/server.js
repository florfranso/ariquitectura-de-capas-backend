import express from 'express';
import options from './config/options.js';
import connectDB from './config/dbConecction.js';
import {userRouter} from "./routes/user.routes.js"


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

app.use("/api/users",userRouter);