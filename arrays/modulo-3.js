let frutas = ['abacaxi', 'maça', 'uva'];
for(let i = 0; i < frutas.length; i++){
  console.log(frutas[i])
}
console.log('\n')
// forEach
let nomes = ['maria', 'josé', 'joão'];

function exibeNome(nome){
  console.log(nome)
}

nomes.forEach(exibeNome)

// nomes.forEach(el=>{
//   console.log(el)
// })
console.log('\n')
let canais = ["Globo", "Sbt", "Record"];

canais.forEach(canal=>{
  canais.push('Band')
  console.log(canal)
})

console.log(canais)
console.log('\n')

// Map
let numeros = [1,2,3];
let dobro = [];

for(let i = 0; i<numeros.length; i++){
  dobro.push(numeros[i]*2)
}

console.log(numeros);
console.log(dobro);
console.log('\n')

let pares = numeros.map(el=> el * 2)
console.log(pares)
console.log('\n')

// filter
let alunos = [
  {nome:'joão', idade:15},
  {nome:'josé', idade:18},
  {nome:'maria', idade:20}
  ];

let alunosDeMaior = []

for(let i = 0; i < alunos.length; i++){
  if(alunos[i].idade >= 18){
    alunosDeMaior.push(alunos[i])
  }
}

console.log(alunos)
console.log(alunosDeMaior)
console.log('\n')

let alunosMaioresDe18 = alunos.filter(el => el.idade>=18)

console.log(alunosMaioresDe18)
console.log('\n')

// find
let alunos2 = [
  {nome:'joão'},
  {nome:'josé'},
  {nome:'maria'}
];

let aluno = []

for(let i = 0; i < alunos2.length; i++){
  if(alunos2[i].nome === 'josé'){
    aluno.push(alunos2[i])
    break;
  }
}

console.log(alunos2)
console.log(aluno)
console.log('\n')

let alunoProcurado = alunos2.find(aluno => aluno.nome === 'josé')

console.log(alunos2)
console.log(alunoProcurado)
console.log('\n')

// every
let todosSaoMaiores = true

for(let i = 0; i < alunos.length; i++){
  if(alunos[i].idade < 18){
    todosSaoMaiores = false
    break
  }
}

console.log(alunos)
console.log(`São todos maiores ? ${todosSaoMaiores}`)
console.log('\n')

let deMaior = alunos.every(aluno => aluno.idade < 18)

console.log(alunos)
console.log(`São todos maiores ? ${deMaior}`)
console.log('\n')

// some
let pesoDasMalas = [12,32,21,29];
let pesoAcimaDe30 = false;

for(let i = 0; i < pesoDasMalas.length; i++){
  if(pesoDasMalas[i] > 30){
    pesoAcimaDe30 = true
  }
}

console.log(pesoDasMalas);
console.log(`Existem malas com peso acima de 30Kgs ? ${pesoAcimaDe30}`)
console.log('\n')

let pesoAcimaDoPermitido = pesoDasMalas.some(peso => peso>30)
console.log(pesoDasMalas);
console.log(`Existem malas com peso acima de 30Kgs ? ${pesoAcimaDe30}`)
console.log('\n')

// reduce

let numbers = [1,2,3,4,5,6]
let acc = 0

for(let i=0; i< numbers.length;i++){
  acc += numbers[i]
}

console.log(acc)
console.log('\n')

let acumulador = numbers.reduce((acc, numero) => acc += numero, 0)

console.log(acumulador)
console.log('\n')

let students = [
  {nome:'joão', idade: 10},
  {nome:'josé', idade: 20},
  {nome:'marcos', idade: 30}
  ];

let namesStudents = students.reduce((arr,students) => {
  arr.push(students.nome)
  return arr
}, [])

console.log(namesStudents)
