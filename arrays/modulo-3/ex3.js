// Exercício 3 - NÃO ESTOU BRAVO
// Escreva o método caps que recebe um array de strings e retorna um outro array com todas as strings do array original em CAIXA ALTA.

// Exemplo: caps(['oi', 'tudo', 'bem?']) → ['OI', 'TUDO', 'BEM?']

const msg = ['oi', 'tudo', 'bem?']

const caps = msg.map(word => word.toUpperCase())

console.log(caps)
