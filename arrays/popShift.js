const notas = [10, 6, 5.5, 10, 9]

console.log(notas)

// notas.pop()
notas.shift()

console.log(notas)

let acc = 0

for(let nota = 0; nota < notas.length; nota++){
  acc += notas[nota]
  console.log(acc)
}

let media = acc / notas.length
console.log(media)
