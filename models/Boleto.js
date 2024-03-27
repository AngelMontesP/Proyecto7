import mongoose from "mongoose";

const boletoSchema = new mongoose.Schema({
    cliente: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Usuario',
        }
    ],
    cantidadBoletos: Number,
    valorBoleto: Number,
    total: Number,
    hora: Number,
    asientos:Array,
  });
  
  export default mongoose.model('Boleto', boletoSchema);