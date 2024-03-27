import Usuario from "../models/Usuario";

const createUsuario = async (req, res) => {
  try {
    const newUsuario = await  Usuario.create(req.body);
    res.json(newUsuario);
  } catch (error) {
    res.status(500).json({
        msg: "Error al crear  el usuario",
        error,
    })
  }
};

export {createUsuario};