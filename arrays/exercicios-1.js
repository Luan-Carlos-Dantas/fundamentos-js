// Um array esparso é um tipo de array no qual a maioria dos elementos tem valores indefinidos. Crie um array esparso e atribua valores a alguns elementos do array (por exemplo, defina valores nos índices 1, 3 e 7). Imprima no console o array e também a informação de comprimento do array.
const lista = ['Luan', 24, true, {banco:'Itau'}, ['Itaú', 'Nubank']]

lista[1] = 'Iago'
lista[3] = {agencia: 3150}
lista[7] = false

console.log(lista)
console.log(lista.length)
console.log(`\n`)
// Crie um programa em Node.js que inicie com um array cinco elementos e atribua um novo valor para a primeira posição (índice 0) desse array. Em seguida, exiba o array antes e depois da alteração.
const arr = [,,,,,]

arr[0] = 'Primeiro Elemento'
console.log(arr)
console.log(`\n`)
// Crie um array vazio chamado meuArray e adicione 3 números inteiros de sua escolha utilizando o método push(). Imprima no console os itens presentes no array para verificar se os números foram adicionados. Em seguida, substitua o primeiro elemento do array (índice 0) pelo dobro do seu valor atual. Imprima no console o array atualizado para verificar a mudança.
const meuArray = []

meuArray.push(1)
meuArray.push(10)
meuArray.push(100)

console.log(meuArray)

meuArray[0] *= 2

console.log(meuArray)
console.log(`\n`)
// Desenvolva um programa em Node.js que crie um array vazio e atribua valores a ele utilizando o método push(). Adicione três números inteiros ao array e, em seguida, exiba o array resultante.
const arrayVazio = []

arrayVazio.push(1)
arrayVazio.push(10)
arrayVazio.push(100)

console.log(arrayVazio)
console.log(`\n`)
// Desenvolva um programa em Node.js que simule uma clínica veterinária. Crie um array vazio chamado clinica que representará a fila de animais na clínica. Em um primeiro momento, simule a chegada de três animais diferentes e exiba a lista de animais no console. Após a exibição, remova os animais da lista um por vez e, por fim, exiba no console o estado final da lista.
const filaVet = []

filaVet.push('cachorro')
filaVet.push('gato')
filaVet.push('papagaio')
filaVet.push('golira')

console.log(filaVet)

filaVet.pop('golira')
filaVet.pop('papagaio')
filaVet.pop('gato')
filaVet.pop('cachorro')

console.log(filaVet)
