export default class User{
  constructor(name,email,nascimento,role = 'estudante',ativo = true){
    this.name = name
    this.email = email
    this.nascimento = nascimento
    this.role = role
    this.ativo = ativo
  }

  exibirInfo(){
    return `Nome: ${this.name}, e-mail: ${this.email}`
  }
}
