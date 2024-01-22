const notaPrimeiroBimestre = 8
const notaSegundoBimestre = 5.6
const notaTerceiroBimestre = 7
const notaQuartoBimestre = 9.3

let media = (notaPrimeiroBimestre+notaSegundoBimestre+notaTerceiroBimestre+notaQuartoBimestre) / 4

media >= 7 ? media+= media * .1 : ''

const mediaFormatada = media.toFixed(2)

console.log(`A média do aluno foi ${mediaFormatada}`)
