import mongoose from "mongoose";

const peliculaSchema = new mongoose.Schema({
    nombre: String,
    director: String,
    fechaDeLanzamiento: Number, 
    calificacion: String,
    duracion: Number,
    genero: String
})

export default mongoose.model('Pelicula', peliculaSchema);
