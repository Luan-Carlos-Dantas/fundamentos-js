let map = new Map()
function funcao(){}
let obj = {}
let obj2 = {}

map.set('string', 'sou uma string')
map.set(funcao, 'sou uma function')
map.set(obj, 'sou um objeto')

console.log(map.size)
console.log(map.has(obj))
console.log(map.has('string'))
console.log(map.delete('string'))
console.log(map.has('string'))

let mapa = new Map();
mapa.set('um', 1);
mapa.set('dois', 2);
mapa.set('três', 3);

for(dados of mapa){
  console.log(dados)
}

for(dados of mapa.keys()){
  console.log(dados)
}

for(dados of mapa.values()){
  console.log(dados)
}


let weakMap = new WeakMap()
let elemento1 = obj
let elemento2 = obj2

weakMap.set(elemento1, 'sou o elemento 1')
weakMap.set(elemento2, 'sou o elemento 2')

console.log(weakMap.get(elemento1));
console.log(weakMap.get(elemento2));
