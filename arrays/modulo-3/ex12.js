// Exercício 12 - Limpando o estoque
// Crie um método chamado existeProdutosDatados que recebe um parâmetro chamado produtos que é um array de produtos e identifica se há algum produto que está acima da data de validade. Caso existe, deve voltar true, caso contrário, false. Cada produto tem as seguintes características:

// nome: String que representa o nome do produto
// preco: Número que representa o preço do produto
// dataValidade: Data de validade do produto
// O método também deve aceitar um segundo parâmetro dataReferencia. Se passado, o método deve fazer a comparação de validade em relação a ele, caso contrário, utiliza a data da execução como parâmetro.

// Tome como exemplo os produtos a seguir:
let produtos = [
  { nome:'Cereal', preco:'10', dataValidade:'21/02/2017' },
  { nome:'Suco de Abacaxi', preco:'12', dataValidade:'01/01/2017' },
  { nome:'Torta de frango', preco:'25', dataValidade:'07/07/2017' }
]

function existeProdutosDatados(lista, dataReferencia){
  const possuiDatados = lista.some(el=> Date.parse(el.dataValidade) < Date.parse(dataReferencia))

  return possuiDatados
}

console.log(existeProdutosDatados(produtos, '2016-01-01'))
