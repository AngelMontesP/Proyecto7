import { connect } from "./config.js";
import express from 'express';
import peliculaRoutes from "./routes/peliculaRoutes.js"
import usuarioRoutes from './routes/usuarioRoutes.js'
import boletoRoutes from "./routes/boletoRoutes.js";

connect();

const api = express();
//Creamos un objeto de express 
api.use(express.json());
//Habilitamos el uso de json

api.listen(8000, ()=>{
    console.log('Api corriendo en el puerto 8000')
});

api.use('/usuarios', usuarioRoutes);
api.use('/boletos', boletoRoutes);
api.use('/peliculas', peliculaRoutes);