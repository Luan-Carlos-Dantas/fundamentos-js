const livros = require('./listaLivros.js')
const livrosMaisBaratos = [...livros]
const livrosMaisCaros = [...livros]
const menorPreco = require('./menorPreco.js')
const maiorPreco = require('./maiorPreco.js')

livrosMaisBaratos.forEach((_, indice)=>{

  let menor = menorPreco(livrosMaisBaratos, indice)

  let livroAtual = livrosMaisBaratos[indice]
  let livroMaisBarato = livrosMaisBaratos[menor]

  livrosMaisBaratos[indice] = livroMaisBarato
  livrosMaisBaratos[menor] = livroAtual
})

for(let atual = 0; atual < livrosMaisCaros.length; atual++){
  let maior = maiorPreco(livrosMaisCaros, atual)

  console.log(`Posiçao atual: ${atual}`)
  let livroAtual = livrosMaisCaros[atual]
  console.log(`Livro atual: ${livrosMaisCaros[atual].titulo} - R$ ${livrosMaisCaros[atual].preco}`)
  let livroMaisCaro = livrosMaisCaros[maior]
  console.log(`Livro maior: ${livrosMaisCaros[maior].titulo} - R$ ${livrosMaisCaros[maior].preco}`)

  livrosMaisCaros[atual] = livroMaisCaro
  livrosMaisCaros[maior] = livroAtual
}

console.log(livrosMaisBaratos)
console.log(livrosMaisCaros)
