const {Router} = require('express');
const { autenticarUsuario, obtenerUsuarios } = require('../controllers/usuarios.controllers');


const routes = Router();


//Autenticar usuario
routes.post('/', autenticarUsuario)
routes.get('/', obtenerUsuarios)


module.exports = routes