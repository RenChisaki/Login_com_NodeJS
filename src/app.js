const express = require("express");
const usuario = require("./router/usuarios")
const testebanco = require("./router/testebanco");

const app = express();
app.use(express.json());
app.use(usuario);
app.use(testebanco);
module.exports = app;