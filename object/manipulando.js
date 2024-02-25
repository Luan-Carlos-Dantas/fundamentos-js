const pessoa = {
  nome: 'Luan',
  sobrenome: 'Carlos',
  idade: 24,
  escolaridade: 'Superior Completo',
  contato:{
    tels: {
      residencial: '',
      celular: ['(11)94194-5225']
    },
    email: 'luancarlos492@gmail.com',
    linkedin: ''
  },
  endereco:{
    cep: '07195-280',
    tipoLogradouro: 'Rua',
    logradouro: 'Santo Estevão',
    numero: '200',
    complemento: '',
    bairro: 'Jardim Monte Carmelo',
    cidade: 'Guarulhos'
  },
  enderecoCompleto(){
    return `${this.endereco.tipoLogradouro} ${this.endereco.logradouro}, ${this.endereco.numero}, ${this.endereco.complemento ? this.endereco.complemento && this.endereco.bairro : this.endereco.bairro}, ${this.endereco.cidade}`
  },
  nomeCompleto: function(){
    return `${this.nome} ${this.sobrenome}`
  }
}
pessoa.profissao = 'Escrevente'

console.log(pessoa)
