import User from "./User.js";
import Admin from "./Admin.js";
import Docentes from "./Docente.js";

// const novoUser = new User('Mariana', 'm@m.com', '2001-01-01')
// console.log(novoUser.exibirInfo())

// novoUser.nome = 'Luisa'

const novoAdm = new Admin('Luan', 'Carlos', 'l@l.com', '1999-01-06')

console.log(novoAdm.nome)
novoAdm.nome = 'Luan Carlos Dantas dos Santos'
console.log(novoAdm.sobrenome)

console.log(novoAdm.exibirInfo())
