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

const getTitulo = async (req, res) => {
  try {
    const titulo = await Pelicula.find({"nombre":(req.params.filtro)})
    if (titulo.length == 0) { 
      return res.status(404).json({
        msg: 'Titulo no encontrado',
      });
    }
    return res.json(titulo);
  } catch (error) {
    res.status(500).json({
      msg: 'Error al buscar titulo',
      error,
    });
  }
};

const getFecha = async (req, res) => {
  try {
    const fecha = await Pelicula.find({"fechaDeLanzamiento":(req.params.filtro)})
    if (fecha.length == 0) { 
      return res.status(404).json({
        msg: 'Fecha no encontrada',
      });
    }
    return res.json(fecha);
  } catch (error) {
    res.status(500).json({
      msg: 'Error al buscar fecha',
      error,
    });
  }
};

const getCalificacion = async (req, res) => {
  try {
    const calificacion = await Pelicula.find({"calificacion":(req.params.filtro)})
    if (calificacion.length == 0) { 
      return res.status(404).json({
        msg: 'Calificacion no encontrada',
      });
    }
    return res.json(calificacion);
  } catch (error) {
    res.status(500).json({
      msg: 'Error al buscar calificacion',
      error,
    });
  }
};

const getGenero = async (req, res) => {
  try {
    const genero = await Pelicula.find({"genero":(req.params.filtro)})
    if (genero.length == 0) { 
      return res.status(404).json({
        msg: 'Genero no encontrado',
      });
    }
    return res.json(genero);
  } catch (error) {
    res.status(500).json({
      msg: 'Error al buscar genero',
      error,
    });
  }
};





/*
peliculaRoutes.get('/titulo/:filtro', getTitulo);
peliculaRoutes.get('/fecha/:filtro',getFecha);
peliculaRoutes.get('/calificacion/:filtro',getCalificacion);
peliculaRoutes.get('/genero/:filtro',getGenero);
*/
export {createPelicula, getPeliculas, getTitulo, getFecha, getCalificacion,getGenero} ;