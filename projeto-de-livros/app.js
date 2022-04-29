const read = require('readline-sync')
const buscarLivros  = require('./Controllers/buscarLivros')

const resposta = read.question(`
============== Menu ================

1 - CATEGORIA: Buscar livro por categoria
2 - ORDENAR: Ordenar livros por quantidade de paginas
3 - RECOMENDADOS: Buscar livros recomendados
4 - LISTA DE DESEJO: Busca livros nao lidos

5 - SAIR

Digite um numero[1-5]:
`)
console.log (resposta)

switch(resposta){
    case '1':
        //chamar a função buscar livros
        buscarLivros()
        break
        case '2':
            // chamar a função listarlivroOrdenados
            break
        default:
            console.log('fim do algoristmo')
            break

}
