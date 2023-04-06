const express = require("express");
const routeHello = require("./router/rotahello")
const testebanco = require("./router/testebanco");

const app = express();

app.use(routeHello);
app.use(testebanco);
module.exports = app;