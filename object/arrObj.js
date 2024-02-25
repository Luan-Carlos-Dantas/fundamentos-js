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

userFinal.enderecos = [{
  tipoLogradouro: 'Avenida',
  logradouro: 'Paulista',
  numero: 300,
  complemento: '',
  bairro: 'Consolação',
  cidade: 'São Paulo',
  uf: 'SP'
},
]

userFinal.enderecos.push(  {
  tipoLogradouro: 'Rua',
  logradouro: 'Augusta',
  numero: 300,
  complemento: 'Ap 24',
  bairro: 'Consolação',
  cidade: 'São Paulo',
  uf: 'SP'
  })

const enderecoAtual = userFinal.enderecos.filter((e)=> e.complemento != '')

console.log(enderecoAtual)
