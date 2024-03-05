// function User(nome, email){
//   this.nome = nome
//   this.email = email

//   this.exibirInfos = function(){
//     return `Nome: ${this.nome}, e-mail: ${this.email}`
//   }
// }

const user = {
  init: function(nome, email){
    this.nome = nome
    this.email = email
  },
  exibirDados(){
    return this.nome
  }
}

const newUser = Object.create(user)
newUser.init("Iago", "iago8@gmail.com")
console.log(newUser.exibirDados())
console.log(newUser)
console.log(user.isPrototypeOf(newUser))
// const newUser = new User('Luan', 'luan@2riguarulhos.com')

// function Admin(role){
//   User.call(this, 'Luan', 'luan@2riguarulhos.com')
//   this.role = role || 'estudante'
// }

// Admin.prototype = Object.create(User.prototype)

// const newAdm = new Admin('admin')

// console.log(newAdm.exibirInfos())
// console.log(newAdm.role)
