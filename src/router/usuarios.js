const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuariosController");

router.post("/cadastro", usuarioController.cadastro);

module.exports = router;