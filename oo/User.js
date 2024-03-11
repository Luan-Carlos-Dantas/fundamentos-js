export default class User{
  #nome
  #sobrenome
  #email
  #nascimento
  #role
  #ativo
  constructor(nome,sobrenome,email,nascimento,role = 'estudante',ativo = true){
    this.#nome = nome
    this.#sobrenome = sobrenome
    this.#email = email
    this.#nascimento = nascimento
    this.#role = role || 'estudante'
    this.#ativo = ativo
  }

  get nome(){
    return `${this.#nome} ${this.#sobrenome}`
  }

  set nome(nomeCompleto){
    if (this.#role === 'admin' && nomeCompleto !== ''){
      let [nome, ...sobrenome] = nomeCompleto.split(' ')
      sobrenome = sobrenome.join(' ')
      this.#nome = nome
      this.#sobrenome = sobrenome
    }else{
      throw new Error('Formato inválido ou permissão não concedida')
    }
  }

  get sobrenome(){
    return this.#sobrenome
  }


  get email(){
    return this.#email
  }

  set email(email){
    this.#email = email
  }

  get nascimento(){
    return this.#nascimento
  }

  set nascimento(nascimento){
    this.#nascimento = nascimento
  }

  get role(){
    return this.#role
  }

  set role(role){
    this.#role = role
  }

  get ativo(){
    return this.#ativo
  }

  set ativo(ativo){
    this.#ativo = ativo
  }

  exibirInfo(){
    return `Nome: ${this.#nome} | E-mail: ${this.#email} | Nascimento: ${this.#email} | Role: ${this.#role} | Ativo: ${this.#ativo}`
  }
}
