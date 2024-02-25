const notas = [10, 9.5, 8, 7, 6];

const notasAtualizada = notas.map(nota => nota+1>=10?10:nota+1)

console.log(notasAtualizada)


const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomeEmUpperCase = nomes.map(nome=>nome.toUpperCase().split('').reverse().join(''))

console.log(nomeEmUpperCase)
