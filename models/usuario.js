const { Schema, model } = require("mongoose");


const usuarioSchema = Schema({
    usuario:{
        type: String,
        require: [true, "El usuario es obligatorio"]
    },
    password: {
        type: String,
        require: [true, "El password es obligatorio"]
    }
});


module.exports = model("Usuario", usuarioSchema)