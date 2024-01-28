// 1 - Crie uma função que receba dois arrays e os concatene em um único array.
function criaNovoArray(arr1, arr2){
  const novoArr = arr1.concat(arr2)
  return novoArr
}

console.log(criaNovoArray([1,2,3,4],[40,30,20,10]))
console.log(`\n`);
// 2 - Crie um array chamado numeros contendo números de 1 a 10. Utilize o método slice para criar um novo array chamado parteNumeros que contenha apenas os números de índice 3 a 7 de numeros.
const numeros = [1,2,3,4,5,6,7,8,9,10]
const parteNumeros = numeros.slice(2,7)

console.log(numeros)
console.log(parteNumeros)
console.log('\n')
// 3 - Dado o array frutas contendo frutas que desejamos comprar na feira:

// const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi']

// Utilize o método splice para remover as frutas no índice 2 e 3 e, em seguida, adicione as frutas 'Kiwi' e 'Pêssego' nesses mesmos índices.
const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi']
frutas.splice(2,2,'Kiwi','Pêssego')
console.log(frutas)
console.log('\n')
// 4 - Crie dois arrays chamados menuPrincipal e menuDeSobremesas contendo opções do cardápio de um restaurante. Utilize o método concat para criar um novo array menuCompleto contendo todos os elementos de menuPrincipal seguidos pelos elementos de menuDeSobremesas.
const menuPrincipal = ['Feijoada', 'Dobradinha', 'Virado a Paulista', 'Macarronada']
const menuDeSobremesas = ['Sorvete', 'Bolo', 'Salada de frutas', 'Frutas']
const menuCompleto = menuPrincipal.concat(menuDeSobremesas)
console.log(menuCompleto)
console.log('\n')

// 5 - Crie uma lista bidimensional com 3 linhas e 3 colunas, onde cada elemento seja uma matriz 3x3 com valores iniciando em 1 e aumentando em 1 a cada elemento.

// Dicas:

// comece com um array vazio, por exemplo const matriz = [] e adicione valores nele com push;
// você pode resolver usando um for dentro de outro for.
const matriz = []
let init = 1

for(let linha = 0;linha < 3; linha++){
  const row = []
  for(let j = 0; j < 3; j++){
    row.push(init++)
  }
  matriz.push(row)
}

console.log(matriz);
matriz.forEach(row => console.log(row));
console.log('\n')

// 6 - Acesse e imprima o elemento na segunda linha e terceira coluna da lista bidimensional matriz criada no exercício anterior.
console.log(matriz[1])
console.log(matriz[2])

// 7 - Adicione um novo elemento (por exemplo,15) na terceira linha e segunda coluna da lista bidimensional matriz criada anteriormente.
matriz[2].push(15)
console.log(matriz[2])
