const { lerJson, escreverJson } = require("../utils/manipularJson.js")

const pathDb = "./src/databases/pensadores.json"

class PensadoresController {

  static add = (req, res) => {
    try {
      const {nome} = req.body
      const {periodo} = req.body
      const {sobre} = req.body

      const pensador = {nome, periodo, sobre}

      const pensadores = lerJson(pathDb);

      if(pensadores.filter(filosofo => nome === filosofo.nome)[0]) {

        res.status(400).json({
          mensagem: "Pensador já existe! Tente cadastrar outro.",
          status: 400
        }) 

      } else {

        pensadores.push(pensador)
        escreverJson(pathDb, pensadores)

        res.status(201).json({
          mensagem: "Pensador cadastrado com sucesso!",
          dados: pensador,
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
      const pensadores = lerJson(pathDb);

      const quantidade = pensadores.length


      res.status(200).json({
        quantidade, 
        pensadores,
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
      const {id} = req.params;

      const pensadores = lerJson(pathDb);

      const pensador = pensadores[id]

      if (pensador) {
        const pensamentos = lerJson("./src/databases/pensamentos.json")

        const nomePensador = pensador.nome;
        const pensamentosNomePensador = pensamentos
          .filter(pensamento => nomePensador === pensamento.filosofo)

        const somenteOsPensamentos = pensamentosNomePensador
          .map(pensamento => pensamento.pensamento)

        const quantidadePensamentos = somenteOsPensamentos.length
        
        res.status(200).json({
          filosofo: {
            nome: pensador.nome,
            periodo: pensador.periodo,
            sobre: pensador.sobre,
            pensamentos: somenteOsPensamentos,
            quantidade: quantidadePensamentos,
            status: 200
          }

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
}

module.exports = PensadoresController