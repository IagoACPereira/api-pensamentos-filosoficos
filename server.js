require("dotenv").config()
const express = require('express');
const appConfig = require("./src/app.js");

const app = express();
const porta = process.env.PORTA || 3000;

appConfig(app)

app.listen(porta, () => console.log(`Escutando porta ${porta}`))