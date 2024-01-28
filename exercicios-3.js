// 1 - Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma conta bancária, depois realize operações de adição e subtração entre eles utilizando uma variável chamada operacao, considerando a função de cada variável criada anteriormente. Exiba os resultados finais no console.
let saldo  = 1000
let deposito = 200
let saque = 500
let operacao = (saldo * deposito) - saque

console.log(saldo)
console.log(deposito)
console.log(saque)
console.log(operacao)

// 2 - Crie uma variável numérica com um valor. Utilize um operador ternário para verificar se esse valor é par ou ímpar. Exiba o resultado no console.

const n = 5

const parOuImpar = n%2===0 ? 'Par' : 'Ímpar'

console.log(parOuImpar)

// 3 - Considere uma situação em que você está verificando se um usuário está logado e tem permissão de administrador para acessar determinada funcionalidade. Utilize variáveis booleanas para simular essas condições e use o operador AND para verificar se ambas são verdadeiras.

const logado = true
const temPermissao = false

const estaAutenticado = logado && temPermissao ? 'Logado' : 'Não está logado'

console.log(estaAutenticado)

// 4 - Declare duas variáveis booleanas e use o operador OR para verificar se pelo menos uma delas é verdadeira. Exiba o resultado no console.

const var1 = true
const var2 = false

if(var1 || var2){
  console.log(`Qualquer uma das variaveis tem valor como true`)
}

// 5 - Imagine um sistema que determina se um usuário tem idade suficiente para comprar o ingresso para um show. Declare duas variáveis que determinem a idade mínima e qual a idade do usuário e utilize estruturas condicionais (if, else) para determinar se o usuário pode realizar a compra.

const idadeUsuario = 24
const idadeMinimaPermitida = 18

if(idadeUsuario >= idadeMinimaPermitida){
  console.log('Usuário tem idade para entrar')
}else{
  console.log('Usuário não tem idade para entrar')
}
