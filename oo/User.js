export default class User{
  #name
  #email
  #nascimento
  #role
  #ativo
  constructor(name,email,nascimento,role = 'estudante',ativo = true){
    this.#name = name
    this.#email = email
    this.#nascimento = nascimento
    this.#role = role || 'estudante'
    this.#ativo = ativo
  }

  get name(){
    return this.#name
  }

  get email(){
    return this.#email
  }

  get nascimento(){
    return this.#nascimento
  }

  get role(){
    return this.#role
  }

  get ativo(){
    return this.#ativo
  }

  exibirInfo(){
    // const objUser = this.#montaObjUser()
    return `Nome: ${objUser.nome} | E-mail: ${objUser.email} | Nascimento: ${objUser.email} | Role: ${objUser.role} | Ativo: ${objUser.ativo}`
  }
}
