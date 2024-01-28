const notas = [10, 8]

console.log(notas)

notas.push(7)
notas.unshift(10)

console.log(notas)

let acc = 0

for(let nota = 0; nota < notas.length; nota++){
  acc += notas[nota]
  console.log(acc)
}

let media = acc / notas.length
console.log(media)
