import express from  'express';
import {
    createPelicula
} from '../controllers/peliculasController.js';

const peliculaRoutes = express.Router();

peliculaRoutes.post('/',createPelicula);

export default  peliculaRoutes;