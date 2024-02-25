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

userFinal.enderecos = {
  tipoLogradouro: 'Avenida',
  logradouro: 'Paulista',
  numero: 300,
  complemento: '',
  bairro: 'Consolação',
  cidade: 'São Paulo',
  uf: 'SP'
}


for (let key in userFinal) {
  let type = typeof userFinal[key]
  if (type != 'object') {
    const element = userFinal[key];
    console.log(`A chave ${key} tem o valor de ${element}`)
  }

  if(type == 'object'){
    for(let key_oo in userFinal[key]){

    const element = userFinal[key][key_oo]
    console.log(`A chave ${key} tem uma chave interna ${key_oo} que possui o valor de ${element}`)
  }
  }
}
