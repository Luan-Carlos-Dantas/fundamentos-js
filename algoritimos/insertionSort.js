const livros = require('./listaLivros.js')
const trocaPosicoes = require('./troca.js')
const livrosMaisBaratos = [...livros]
const livrosMaisCaros = [...livros]


function insertionSort(arr){
  for(let atual = 0; atual < arr.length; atual++){
    let analise = atual;

    while(analise > 0 && arr[analise].preco<arr[analise-1].preco){
      trocaPosicoes(arr,analise)

      analise--
    }
  }

  return arr
}

console.log(insertionSort(livrosMaisBaratos))
