// Exercício 11 - A pequena ovelha Dolly
// Utilizando o método auxiliar forEach, crie uma função clonaObjeto que recebe como parâmetro um objeto e cria uma cópia exata dela.

// utilize o método Object.getOwnPropertyNames para obter as propriedades do objeto

function clonaObjeto(obj){
  console.log(obj)
  const clone = Object.getOwnPropertyNames(obj);
  console.log(clone)
  const objClone = []
  clone.forEach(props=>{
    objClone[props] = obj[props]
  })

  return objClone
}

const pessoa = {
  nome: 'Luan',
  email: 'luan@l.com',
  tel: '119000-0000'
}

console.log(clonaObjeto(pessoa))
