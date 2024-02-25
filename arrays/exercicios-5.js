// 1 - Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays fornecidos, utilizando Spread Operator.
function unirArrays(...args){
  return [].concat(...args)
}

const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];
const numeros = [6, 9, 12, 15, 18, 21];
const lista = [1.5,9.63,5,8.63,10,7,89]

console.log(unirArrays(nomes,numeros,lista))
console.log('\n')

// Dica: é possível usar o spread operator diretamente em um parâmetro de função para "espalhar" seu conteúdo, por exemplo function funcaoExemplo(...params).

// 2 - Crie um array de números chamado valores. Depois,escreva um programa que some todos os elementos deste array utilizando o método reduce.
const somaValores = lista.reduce((acc,n)=>acc+n,0)
console.log(somaValores)
console.log('\n')

// 3 - Considere duas listas de cores:

const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']

const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']

// Crie um programa que una essas duas listas, removendo cores duplicadas e exiba a lista final.

function uneCores(lista,lista_2){
  let coresUnidas = [...lista,...lista_2]
  let listaCorrigida = [...new Set(coresUnidas)]

  return listaCorrigida
}
console.log(uneCores(coresLista1,coresLista2))
console.log('\n')
// 4 - Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.

const pares = lista.filter(n=>n%2===0)
console.log(pares)
console.log('\n')
// 5 - Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.
const multTresEMaiorCinco = numeros.filter(n=>n%3===0&&n>5)
console.log(multTresEMaiorCinco)
console.log('\n')

// 6 - Crie uma função que receba um array de números e retorne a soma de todos os elementos.
const soma = numeros.reduce((acc,n)=>acc+n,0)
console.log(soma)
console.log('\n')
