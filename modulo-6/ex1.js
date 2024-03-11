function possuiProdutos(produtos, produtoDesejado){
  let result = false
  produtos.has(produtoDesejado) ? result = true : result

  return result
}

let produtos = new Map();
produtos.set('Arroz', 7.10);
produtos.set('Feijão', 2.30);
produtos.set('Macarrão', 4.70);
produtos.set('Refrigerante', 3.00);


console.log(possuiProdutos(produtos, 'Arroz'))
console.log(possuiProdutos(produtos, 'Leite'))
