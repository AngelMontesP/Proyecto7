import { connect } from "./config.js";
connect();

const api = express();
//Creamos un objeto de express 
api.use(express.json());
//Habilitamos el uso de json

api.listen(8000, ()=>{
    console.log('Api corriendo en el puerto 8000')
});



