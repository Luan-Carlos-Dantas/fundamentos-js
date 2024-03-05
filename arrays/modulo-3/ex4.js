// Exercício 4 - Equilibrio de parênteses
// Utilizando a função auxiliar reduce, escreva uma função chamada validaParenteses que avalia se os parênteses estão balanceados. Isso significa que, pra cada parênteses esquerdo “(“ é necessário ter um parênteses direito “)” correspondente. A função deve aceitar uma string e retornar um valor booleano (true ou false).

// Exemplo: validaParenteses(')((()()())))'); → false
// Exemplo: "()()()" → true
// Exemplo: ")(" → false

function validaParenteses(params){
  const arrParenteses = params.split('')
  let balanceados =  !arrParenteses.reduce((soma, parenteses)=>{
    if(soma < 0) {return soma}
    if(parenteses === '(') {return ++soma}
    if(parenteses === ')') {return --soma}
  },0)

  return balanceados
}


console.log(validaParenteses(')((()()())))'))
console.log(validaParenteses('()()()'))
console.log(validaParenteses(')('))
