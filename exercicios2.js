const fraseTamanhoEMaiusculas = 'Crie uma variável contendo uma frase'

console.log(fraseTamanhoEMaiusculas.length + `\n` + fraseTamanhoEMaiusculas.toUpperCase())
console.log('\n')

let valNull = null
let und

console.log(valNull)
console.log(und)
console.log('\n')

const nome = 'Luan'
const idade = 24
const empregado = true
const fraseCompleta = `O cliente ${nome}, tem ${idade} e com emprego como ${true}`
console.log(fraseCompleta)
console.log('\n')

const num = 20
const strin = 'OP'
console.log(toString(num), typeof(toString(num)))
console.log(Number(strin), typeof(Number(strin)))
console.log('\n')

console.log(fraseCompleta.toUpperCase())
console.log(fraseCompleta.toLowerCase())
console.log(fraseCompleta.split('').reverse().join(''))
console.log(fraseCompleta.slice(0, 10))
