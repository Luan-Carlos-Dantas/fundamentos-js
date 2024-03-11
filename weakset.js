let musica1 = {
  title: 'Praise the lord',
  author: ['A$AP ROCKY', 'Skepta']
}

let musicas = new WeakSet([musica1])
console.log(musicas)

musica1 = null

console.log(musicas)
