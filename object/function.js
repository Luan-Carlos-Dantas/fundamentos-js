const client = {
  nome: "Iago",
  idade: 24,
  email: "iago@email.com",
  contato: {
    celular: "(11)99999-9999",
    residencial: "(11)2000-0000",
    comercial: "(11)99999-9999"
  },
  saldo: 200.00,
  saldoSuficiente(price){
    if(isNaN(price)){
      return 'O valor precisa ser um valor válido'
    }
      return this.saldo >= price  ? `O saldo é suficiente para a transação` : `O saldo não é suficiente para a transação`
  }
}

console.log(client.saldoSuficiente(500))
