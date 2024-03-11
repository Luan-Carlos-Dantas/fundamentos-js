const compras = 'leite,feijão,arroz,mandioca';
function criaListaHTML(compras){
  comprasArr = compras.split(',')
  const el = comprasArr.map(el => `<li>${el}/li>`).join('')
  let listaEmHTML = `<ul>${el}</ul>`

  return listaEmHTML
}

console.log(criaListaHTML(compras))
