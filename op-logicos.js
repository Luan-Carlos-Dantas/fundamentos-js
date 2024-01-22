const notaPrimeiroBimestre = 8
const notaSegundoBimestre = 5.6
const notaTerceiroBimestre = 7
const notaQuartoBimestre = 9.3
const faltas = 3
const advertencias = 0

let media = (notaPrimeiroBimestre+notaSegundoBimestre+notaTerceiroBimestre+notaQuartoBimestre) / 4

media >= 7 ? media+= media * .1 : ''

const mediaFormatada = media.toFixed(2)

if (!(mediaFormatada <= 7) && !(faltas > 4)){
  console.log(`Aluno reprovado, com media de ${mediaFormatada} e quantidade faltas igual a ${faltas}`)
}else{
  console.log(`Aluno aprovado. Parabéns`)
}

if(faltas <= 2 && !advertencias){
  console.log(`O aluno receberá um bônus de nota igual a ${mediaFormatada*.1}`)
}else{
  console.log(`O aluno não receberá o bônus`)
}
