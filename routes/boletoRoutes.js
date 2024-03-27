import express from 'express';
import { createBoleto } from '../controllers/boletoController.js';

const boletoRoutes = express.Router();

boletoRoutes.post('/',createBoleto);

export default boletoRoutes;
