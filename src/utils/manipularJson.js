const fs = require("fs")

function lerJson(path) {
  return JSON.parse(fs.readFileSync(path, "utf8"))
}

function escreverJson(path, dados) {
  return fs.writeFileSync(path, JSON.stringify(dados), "utf8")
}

module.exports = { lerJson, escreverJson }