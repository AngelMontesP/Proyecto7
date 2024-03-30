import express from  'express';
import {
    createPelicula, getPeliculas
} from '../controllers/peliculasController.js';

const peliculaRoutes = express.Router();

peliculaRoutes.post('/',createPelicula);
peliculaRoutes.get('/', getPeliculas);

export default  peliculaRoutes;