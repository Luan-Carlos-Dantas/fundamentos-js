const notas = [10, 6.5, 8, 7.5];
let acc = 0

for(let i = 0; i < notas.length; i++){
  acc += notas[i]
}

const media = Math.floor(acc / notas.length)
console.log(media)
