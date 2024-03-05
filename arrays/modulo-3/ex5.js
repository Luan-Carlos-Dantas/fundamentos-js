// Exercício 5 - Sem duplicações
// Faça uma função chamada removeDuplicatas que recebe um array de números inteiros e remove todas as suas duplicadas.

// Utilize as funções auxiliares: reduce e find.

// Exemplo: removeDuplicatas([1,2,3,3,4,5]) → [1,2,3,4,5]

function removeDuplicatas(arr){
  // console.log(arr)
  const arrUnique = arr.reduce((arr, numero)=>{
    let duplicado = arr.find(v => v === numero)


    if(!duplicado){
      arr.push(numero)
    }
    return arr
  }
  ,[])

  return arrUnique
}

const numeros = [1,2,3,3,4,5]

console.log(removeDuplicatas(numeros))
