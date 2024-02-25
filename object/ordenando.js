const users = require('./clients.json')

function ordenar(arr, props){
  const result = arr.sort((a,b)=>{
    if(a[props]<b[props]){
      return -1
    }
    if(a[props] > b[props]){
      return 1;
    }
    return 0
  })

  return result
}

const ordenadoPorNome = ordenar(users, 'nome')

console.log(ordenadoPorNome)
