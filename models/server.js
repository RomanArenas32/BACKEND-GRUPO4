const express = require('express');
const { dbConnecion } = require('../database/config');




class Server {
    constructor(){
        this.app = express();
        this.PORT = process.env.PORT;

        //conexion a la DB
        this.dbConnecion();

        this.middleware();
        this.routes();
    }


    async dbConnecion(){
        await dbConnecion();
    }

    middleware(){
        this.app.use(express.json());
    }

    routes(){
        this.app.use('/user', require('../routes/usuarios.routes'))
    }

    listen(){
        this.app.listen(this.PORT, ()=>{
            console.log("Servidor corriendo en el puerto", this.PORT)
        })
    }
}



module.exports = Server;