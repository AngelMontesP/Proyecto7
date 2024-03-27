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

export {createBoleto};