const notas = [10, 6.5, 8, 7.5]
let acc = 0

for(let nota = 0; nota < notas.length; nota++){
  acc += notas[nota]
  console.log(acc)
}

let media = acc / notas.length
console.log(media)
