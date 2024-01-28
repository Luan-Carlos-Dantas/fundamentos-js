const estudanteReprovado = function(notaFinal, faltas){
  if(notaFinal < 7 && faltas >= 4){
    return true
  }else{
    return false
  }
}

console.log(estudanteReprovado(10, 10))
