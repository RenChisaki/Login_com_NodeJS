const express = require("express");
const routeHello = require("./router/rotahello")

const app = express();

app.use(routeHello);
module.exports = app;