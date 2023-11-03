const { lerJson, escreverJson } = require("../utils/manipularJson.js");

const pathDb = "./src/databases/pensamentos.json"

class PensamentosController {
  static add = (req, res) => {
    try {
      const {pensamento} = req.body;
      const {filosofo} = req.body;

      const dados = { pensamento, filosofo };

      const pensamentos = lerJson(pathDb)

      if(pensamentos.filter(pensa => pensamento === pensa.pensamento)[0]) {

        res.status(400).json({
          mensagem: "Pensamento já existe! Tente cadastrar outro.",
          status: 400
        }) 

      } else {

        pensamentos.push(dados)
        escreverJson(pathDb, pensamentos)
  
        res.status(201).json({
          mensagem: "Pensamento cadastrado com sucesso!",
          dados,
          status: 201
        })

      }

    } catch (error) {
      res.status(500).json({
        mensagem: "Ocorreu um erro interno no servidor!",
        error,
        status: 500
      })
    }
  }

  static exibirTodos = (req, res) => {
    try {
      const pensamentos = lerJson(pathDb)

      const quantidade = pensamentos.length

      res.status(200).json({
        quantidade,
        pensamentos,
        status: 200
      })
    } catch (error) {
      res.status(500).json({
        mensagem: "Ocorreu um erro interno no servidor!",
        error,
        status: 500
      })
    }
  }

  static exibirUmPorId = (req, res) => {
    try {
      const {id} = req.params

      const pensamento = lerJson(pathDb)[id]

      if (pensamento) {
        res.status(200).json({
          pensamento,
          status: 200
        })
      } else {
        res.status(400).json({
          mensagem: `Não há nenhum filósofo com o id ${id}!`,
          status: 400
        })
      }
    } catch (error) {
      res.status(500).json({
        mensagem: "Ocorreu um erro interno no servidor!",
        error,
        status: 500
      })
    }
  }

  static exibirPorNomePensador = (req, res) => {
    try {
      const pensador = req.params.nomePensador

      const todosOsPensamentos = lerJson(pathDb)

      const pensamentosDoPensador = todosOsPensamentos
        .filter(pensamentos => pensamentos.filosofo === pensador)

      const quantidade = pensamentosDoPensador.length
      const soPensamentosDoPensador = pensamentosDoPensador.map(pensamentos => pensamentos.pensamento)

      if (quantidade != 0) {
        res.status(200).json({
          filosofo: pensador,
          pensamentos: soPensamentosDoPensador,
          quantidade,
          status: 200
        })
      } else {
        res.status(400).json({
          mensagem: `Não existe pensamentos para ${pensador}!`,
          status: 400
        })
      }
    } catch (error) {
      res.status(500).json({
        mensagem: "Ocorreu um erro interno no servidor!",
        error,
        status: 500
      })
    }
  }
}

module.exports = PensamentosController