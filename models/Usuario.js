import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
    dni:{
        type: String,  
        required: true,
    },
    nombres:{
        type: String,  
        required: true,
    },
    apellidos:{
        type: String,  
        required: true,
    },
    fechaNacimiento:{
        type: Date,  
        required: true,
    },
    rol:{
        type: String,  
        default:"Usuario",
    },
    telefono:{
        type: Number,  
        required: true,
    },
    correo:{
        type: String,  
        required: true,
    },
    contrasena:{
        type: String,  
        required: true,
    },
    username:{
        type: String,  
        required: true,
    },
})

export default  mongoose.model('Usuario',usuarioSchema); 