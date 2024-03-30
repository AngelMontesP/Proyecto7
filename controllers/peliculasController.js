import Pelicula from '../models/Pelicula.js'

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

const getPeliculas = async (req,res) =>{

  try {
      const todosPeliculas = await Pelicula.find();
      res.json(todosPeliculas);
  } catch (error) {
      res.status(500).json({
          msg:"Error al obtener todas las peliculas",
          error,
      })
  }
};

export {createPelicula, getPeliculas};