function calculaValorTotalDaCompra(produtos,cidade,caixa,fretes){
  let totalPedido = 0
  for(produto of produtos){
    if(caixa.has(produto)){
      totalPedido += caixa.get(produto)

    }
  }
  if(fretes.has(cidade)){
    totalPedido += fretes.get(cidade)
  }else{
    totalPedido += fretes.get('Outros')
  }

  return totalPedido.toFixed(2)

}

let produtos = new Map()
produtos.set('Arroz',7.10)
produtos.set('Feijão',2.30)
produtos.set('Macarrão',4.70)
produtos.set('Refrigerante',3.00)

let fretes = new Map()
fretes.set('São Paulo',10.10)
fretes.set('Rio de Janeiro',12.30)
fretes.set('Brasília',14.70)
fretes.set('Outros',13.00)

console.log(calculaValorTotalDaCompra(['Arroz', 'Feijão'], 'São Paulo', produtos, fretes))
