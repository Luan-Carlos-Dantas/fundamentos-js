const userFinal = {
  nome: "Iago",
  idade: 24,
  email: "iago@email.com",
  contato: ["(11)2000-0000","(11)99999-9999"]
}
userFinal.enderecos = [{
  tipoLogradouro: 'Avenida',
  logradouro: 'Paulista',
  numero: 300,
  complemento: '',
  bairro: 'Consolação',
  cidade: 'São Paulo',
  uf: 'SP'
}]


function callCliente(telRes, telCom){
  console.log(`Ligando para ${telRes}`)
  console.log(`\n`)
  console.log(`Ligando para ${telCom}`)
}

const destinatario = {
  destinatarioNome: userFinal.nome,
  ...userFinal.enderecos[0]
}

console.log(destinatario)

callCliente(...userFinal.contato)
