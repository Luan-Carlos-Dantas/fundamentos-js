// Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.
const lista = [1,52,36,97,4,3,5]

for(let n of lista){
  console.log(n)
}

// Crie uma função que receba uma array e imprima no console o número do índice e o elemento.
function leArr(arr){
  for(let i=0; i < arr.length; i++){
    console.log(`O índice ${i} da lista tem o valor de ${arr[i]}`)
  }
}

leArr(lista)

// Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.
function somaArr(arr){
  let acc = 0
  for(let i=0;i<arr.length;i++){
    acc+=arr[i]
  }
  return acc
}

console.log(somaArr(lista))
// Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'.
const arrMenoresMaiores = [5, 37, 18, 59, 12, -5];

function imprimeMaiorEMenor(arr) {

  let maior = 0;
  let menor = 0;

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] > maior) {
      maior = arr[i]
    }
    if (arr[i] < menor) {
      menor = arr[i]
    }
  }
  return `o maior número é ${maior} e o menor número é ${menor}`;
}

console.log(imprimeMaiorEMenor(arrMenoresMaiores));
// Crie um programa que utilize um laço for para percorrer uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e exibir no console apenas os números pares contidos nesse array.
const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14]

for(let i=0;i<numeros.length;i++){
  if(numeros[i]%2==0){
    console.log(numeros[i])
  }
}
// Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.
function calculaMedia(arr){
  let acc = 0
  for(let i=0;i<arr.length;i++){
    acc+=arr[i]
  }
  let media = Math.floor(acc/arr.length)
  return media
}

console.log(calculaMedia(lista))
console.log(calculaMedia(numeros))
