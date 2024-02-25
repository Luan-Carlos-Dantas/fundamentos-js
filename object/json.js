// Javas
// Script
// Object
// Notation

const dados = require('./client.json')

const clientDados = JSON.stringify(dados)

console.log('Recebendo os dados arquivo JSON e mostrando na tela')
console.log(dados)
console.log(typeof dados)
console.log('\n')
console.log('Após receber esse dados desse arquivo utilizamos o método stringfy do JSON para transformar o objeto em uma string')
console.log(clientDados)
console.log('\n')
console.log('Após transformarmos em uma string utilizamos agora o método ')
console.log(JSON.parse(clientDados))
