// Exercício 2 - Quero o dobro
// Utilizando o método map, escreva o método dobrar que recebe um array de números inteiros e retorna um array com todos os valores do array original dobrados.

// Exemplo: dobrar([1,2,3]) → [2,4,6]
const arrayDeNumeros = [10, 5, 20, 15, 30, 25, 40, 35, 50, 45, 60, 55, 70, 65, 80, 75, 90, 85, 100, 95];

const dobrar = arrayDeNumeros.map(n=>n*2)

console.log(dobrar)
