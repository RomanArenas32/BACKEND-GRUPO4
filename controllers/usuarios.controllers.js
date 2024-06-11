const Usuario = require("../models/usuario");

const autenticarUsuario = async (req, res) => {
  const { usuario, password } = req.body;
  const user = new Usuario({ usuario, password });

  res.json({
    msg: "Usuario autenticado correctaamente",
  });

  await user.save();
};

const obtenerUsuarios = async (req, res) => {

  const usuarios = await Usuario.find();

  try {
    res.json({
      msg: "usuarios obtenidos",
      usuarios,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { autenticarUsuario, obtenerUsuarios };
