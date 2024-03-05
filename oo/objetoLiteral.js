const user = {
  name: "Luan",
  email: "l@l.com",
  nascimento: "1999-01-01",
  role: "admin",
  active: true,
  exibirInfo(){
    return `Nome: ${this.name}, e-mail: ${this.email}`
  }
}

console.log(user.exibirInfo())

const exibir = user.exibirInfo.bind(user)

console.log(exibir())
// Herança de protótipo - "Modelo de Objetos"
// call()
const usuario = {
  nome: "Luan",
  email: "l@gmail.com"
}

function exibirDados(){
  console.log(this.nome, this.email)
}

exibirDados.call(usuario)
