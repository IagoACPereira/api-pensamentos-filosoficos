const PensamentosController = require("../controllers/pensamentosController.js")

const pensamentosRouter = require("express").Router()

pensamentosRouter
  .post("/pensamentos", PensamentosController.add)
  .get("/pensamentos/pensador/:nomePensador", PensamentosController.exibirPorNomePensador)
  .get("/pensamentos/:id", PensamentosController.exibirUmPorId)
  .get("/pensamentos", PensamentosController.exibirTodos)

module.exports = pensamentosRouter