import express from  'express';
import {
    createPelicula, getPeliculas, getTitulo, getFecha, getCalificacion , getGenero
} from '../controllers/peliculasController.js';

const peliculaRoutes = express.Router();

peliculaRoutes.post('/',createPelicula);
peliculaRoutes.get('/', getPeliculas);
peliculaRoutes.get('/titulo/:filtro', getTitulo);
peliculaRoutes.get('/fecha/:filtro',getFecha);
peliculaRoutes.get('/calificacion/:filtro',getCalificacion);
peliculaRoutes.get('/genero/:filtro',getGenero);

export default  peliculaRoutes;