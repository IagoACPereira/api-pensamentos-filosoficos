const PensadoresController = require("../controllers/pensadorescontroller.js")

const pensadoresRouter = require("express").Router()

pensadoresRouter
  .post("/pensadores", PensadoresController.add)
  .get("/pensadores", PensadoresController.exibirTodos)
  .get("/pensadores/:id", PensadoresController.exibirUmPorId)

module.exports = pensadoresRouter