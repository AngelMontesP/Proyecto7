import express from "express";

import { createUsuario } from "../controllers/usuarioController.js";    

const usuarioRoutes = express.Router();

usuarioRoutes.post('/',createUsuario);

export default usuarioRoutes;