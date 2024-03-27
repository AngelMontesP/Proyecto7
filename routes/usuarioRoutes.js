import express from "express";

import { createUsuario,getUsuarios } from "../controllers/usuarioController.js";    

const usuarioRoutes = express.Router();

usuarioRoutes.post('/',createUsuario);

usuarioRoutes.get('/',getUsuarios);

export default usuarioRoutes;