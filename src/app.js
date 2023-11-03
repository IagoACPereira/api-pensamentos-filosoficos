const express = require('express');
const pensadoresRouter = require('./routes/pensadoresRoutes.js');
const pensamentosRouter = require('./routes/pensamentosRoutes.js');

function appConfig(app) {
  app.use(
    express.json(),
    express.urlencoded({
      extended: true
    })
  )

  app.use(
    pensadoresRouter,
    pensamentosRouter
  )

  app.get("/", (req, res) => {
    res.send("Ok.")
  })
}

module.exports = appConfig