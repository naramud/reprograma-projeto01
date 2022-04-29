const livros = require('../dataBase')
const read = require('readline-sync')

const buscarLivros = () => {
    const opcaoInicial = read.question('Deseja buscar por categoria? S/N'). toUpperCase()

    if (opcaoInicial === 'S'){
        const categorias = livros.map
    }

}

module.exports = buscarLivros