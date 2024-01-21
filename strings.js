const estudante = 'Luan';
const docente = 'Iago';
const cumprimento = "Nosso lema é 'conhecimento fácil'";
const citacao = `Ju diz: "Nosso lema é 'conhecimento fácil'"`

// '+' - sinal de concatenação

console.log(estudante)
console.log(docente)
console.log(cumprimento)
console.log(citacao)

// Template Strings ou Literals
console.log( `O estudante chama ${estudante}`)
console.log('\n')

//Alterando a string
const senha = '@SenhaSegura123' + estudante.toUpperCase();
console.log(senha.split('').reverse().join(''))
console.log('\n')

//Codificação
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)
