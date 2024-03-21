import Pelicula from '../models/pelicula.js'

//Create
const createPelicula = async  (req, res) => {
  try {
    const newPelicula= await Pelicula.create(req.body);
    res.json(newPelicula);
  } catch (error) {
    res.status(500).json({
        msg: "Error al crear la pelicula",
        error,
    });
  }  
};

// /// POST EN  http://localhost:8000/peliculas
// {
//   "nombre": "Pelicula",
//   "director": "Angel Montes",
//   "fechaDeLanzamiento": 2010, 
//   "calificacion": "A",
//   "duracion": 120,
//   "genero": "Terror"
// }
///

export {createPelicula};