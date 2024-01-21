const varString = 'String'
const varNum = 1
const varBool = true

console.log(varBool)
console.log(varNum)
console.log(varString)
console.log(`\n`)

const firstName = 'Luan'
const secondName = 'Carlos'
const fullName1 = firstName+secondName
const fullName2 = `${firstName} ${secondName}`
console.log(fullName1)
console.log(fullName2)
console.log(`\n`)

const var1 = '50'
const var2 = 60
const var3 = `${var1} ${var2}`
console.log(var3)
console.log(`\n`)

let op1 = 'Drew'
console.log(op1)
op1 = 'Chris'
console.log(op1)
console.log(`\n`)

if(true){
  var v1 = 'Global'
  let v2 = 'Bloco'
}
console.log(v1)
// console.log(v2)

let isRaining = false

if(isRaining){
  console.log('Preciso levar um guarda chuva')
}else{
  console.log('Não preciso levar um guarda chuva')
}
