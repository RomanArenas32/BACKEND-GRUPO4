const mongoose = require('mongoose');



const dbConnecion = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_CONNECT);
        console.log("Conexion exitosa")
    } catch (error) {
        console.log(error)
        throw new Error('Connexion a la base de datos fallida')
    }
}


module.exports = {
    dbConnecion
}