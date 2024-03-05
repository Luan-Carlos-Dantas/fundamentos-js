const user = {
  name: "Luan",
  email: "l@l.com",
  nascimento: "1999-01-01",
  role: "student",
  active: true,
  exibirInfo(){
    return `Nome: ${this.name}, e-mail: ${this.email}`
  }
}

const admin = {
  name: "Mariana",
  email: "m@m.com",
  nascimento: "1999-01-01",
  role: "admin",
  active: true,
  criaCurso(nomeCurso){
    return `Criou o curso ${nomeCurso}`
  }
}


Object.setPrototypeOf(admin,user)

console.log(admin.criaCurso('Matematica'))
console.log(admin.exibirInfo())
