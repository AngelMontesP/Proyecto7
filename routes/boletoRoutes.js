import express from 'express';
import { createBoleto , getBoletos} from '../controllers/boletoController.js';

const boletoRoutes = express.Router();

boletoRoutes.post('/',createBoleto);
boletoRoutes.get('/', getBoletos);
export default boletoRoutes;
