import mongoose from "mongoose";    
import dotenv from 'dotenv';

dotenv.config(); //Cargamos los valores de conecion a la BD, que estan en variable de entorno

const connect = ()=>{
    mongoose.connect(process.env.DB_URI);
    const connection = mongoose.connection;

    connection.once('open',()=>{
        console.log('Conectado a MongoDB');
    });

    connection.once('error',()=>{
        console.error('Error al conectar a MongoDB:');
    })
}

export {connect};   //Exportamos el metodo para poder llam

