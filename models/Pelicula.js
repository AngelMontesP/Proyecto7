import mongoose from "mongoose";

const peliculaSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true,
      },
      director:{
        type: String,
        required: true,
    },
    fechaDeLanzamiento:{
        type: Number,
        required: true,
    },
    calificacion:{
        type: String,
        required: true,
    },
    duracion:{
        type: Number,
        required: true,
    },
    genero:{
        type: String,
        required: true,
    },
})

export default mongoose.model('Pelicula', peliculaSchema);
