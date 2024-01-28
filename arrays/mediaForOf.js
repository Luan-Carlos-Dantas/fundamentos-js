const notas = [9, 4.8, 8, 3.55];
let acc = 0

for (nota of notas) {
  acc+=nota
}

const media = Math.floor(acc / notas.length)
console.log(media)
