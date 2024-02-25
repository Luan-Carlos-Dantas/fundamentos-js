const userFinal = {
  nome: "Iago",
  idade: 24,
  email: "iago@email.com",
  contato: {
    celular: "(11)99999-9999",
    residencial: "(11)2000-0000",
    comercial: "(11)99999-9999"
  }
}

userFinal.endereco = {
  tipoLogradouro: 'Avenida',
  logradouro: 'Paulista',
  numero: 300,
  complemento: '',
  bairro: 'Consolação',
  cidade: 'São Paulo',
  uf: 'SP'
}

console.log(userFinal.endereco)
