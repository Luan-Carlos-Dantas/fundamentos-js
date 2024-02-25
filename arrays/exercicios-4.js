// 1 - Utilize o método forEach para imprimir cada elemento de um array juntamente com seu índice.
const lista = [1.5,9.63,5,8.63,10,7,89]
lista.forEach(el=>console.log(el))
console.log(`\n`)

// 2 - Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: um array e uma função de callback que executa alguma operação matemática. Essa função deve iterar por cada elemento do array e aplicar a função de callback em cada um dos elementos, imprimindo o resultado da operação no console.
function executaOperacaoEmArray(arr,cb){
  for(let i=0; i<arr.length;i++){
    console.log(cb(arr[i]))
  }
}

function soma(n){
  return n+2
}
executaOperacaoEmArray(lista,soma)

console.log(`\n`)

// 3 - Você recebeu um array numeros contendo valores numéricos. Crie um programa que verifique se um número específico está presente nesse array. Se estiver, o programa deve retornar a posição (índice) desse número. Caso contrário, se o número não estiver presente, o programa deve retornar "-1".
function posicaoNoArray(arr,n){
  if(arr.includes(n)){
    let index = arr.indexOf(n)
    console.log(`O ${n} está na posição ${index} do array`)
  }else{
    console.log(`-1`);
  }
}
posicaoNoArray(lista,9.63)
console.log(`\n`)

// 4 - Você recebeu dois arrays de nomes contendo os alunos da Turma A e da Turma B.

const nomesTurmaA = [
  'João Silva',
  'Maria Santos',
  'Pedro Almeida'
];

const nomesTurmaB = [
  'Carlos Oliveira',
  'Ana Souza',
  'Lucas Fernandes'
];
// Utilize o método concat() para unir os arrays das turmas A e B em um único array chamado todasAsTurmas. Depois, utilize o método find() para buscar um aluno específico pelo nome no array todosAlunos. Exiba no console uma mensagem informando o nome do aluno procurado; caso não exista na lista, retorne uma mensagem de aviso, por exemplo Aluno não encontrado.

const todasAsTurmas = nomesTurmaA.concat(nomesTurmaB)

function buscaAluno(arr,nome){
  if(arr.find(aluno => aluno === nome)){
    return `O aluno ${nome} se encontra na lista`
  }else{
    return `O aluno ${nome} não se encontra na lista`
  }
}

console.log(buscaAluno(todasAsTurmas,'Luan'))
console.log(`\n`)

// 5 - Considere um array de números inteiros.

// Utilize o método forEach() para multiplicar cada elemento do array por 3 e exibir o resultado de cada multiplicação. Depois, utilize o método findIndex() para encontrar o índice do número 18 no array.
const numeros = [6, 9, 12, 15, 18, 21];

numeros.forEach(n=>console.log(n*3))

console.log(numeros.findIndex(n => n === 18))
console.log(`\n`)
