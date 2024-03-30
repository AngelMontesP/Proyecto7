import Boleto from "../models/Boleto.js";

const createBoleto = async  (req, res) => {
try {
    const newBoleto = await Boleto.create(req.body);
    res.json(newBoleto);
} catch (error) {
    res.status(500).json({
        msg:"Error al crear boletos",
        error,
    })
}
}

const getBoletos = async (req,res) =>{

    try {
        const todosBoletos = await Boleto.find();
        res.json(todosBoletos);
    } catch (error) {
        res.status(500).json({
            msg:"Error al obtener todos los boletos",
            error,
        })
    }
};



export {createBoleto, getBoletos};