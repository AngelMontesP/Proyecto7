import Boleto from "../models/Boleto.js";
import Usuario from "../models/Usuario.js";

const createUsuario = async (req, res) => {
  try {
    const newUsuario = await Usuario.create(req.body);
    res.json(newUsuario);
  } catch (error) {
    res.status(500).json({
      msg: "Error al crear  el usuario",
      error,
    });
  }
};

const getUsuarios = async (req, res) => {
  try {
    const verUsuarios = await Usuario.find();
    res.json(verUsuarios);
  } catch (error) {
    res.status(500).json({
      msg: "Error Interno del Servidor",
      error,
    });
  }
};


export { createUsuario, getUsuarios};