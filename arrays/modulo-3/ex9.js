// Crie uma função chamada calculaRaizesQuadradas que recebe um array de números inteiros positivos e devolve um outro array com as raízes quadradas correspondentes de cada um dos itens.

// para este exercício, assuma que a entrada terá somente números com raiz exata.
// utilize a função Math.sqrt para calcular a raiz quadrada

let lista = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, 361, 400]


function calculaRaizesQuadradas(arr){
  const raizes = arr.map(el=> Math.sqrt(el))

  return raizes
}

console.log(calculaRaizesQuadradas(lista))
