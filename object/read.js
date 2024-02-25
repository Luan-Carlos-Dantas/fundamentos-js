const users = require('./clients.json')

const usersLivingInApartment = users.filter((user)=> user.endereco.apartamento)
  .filter((user)=> !user.endereco.hasOwnProperty('complemento'))

usersLivingInApartment.forEach((user)=>{
  console.log(user)
})

// function findUser(arr, key, value){
//    return arr.find((el)=> el[key].includes(value))
// }

// const searched = findUser(users,'nome','Kirby')
// const searched2 = findUser(users, 'email', 'gtumielli3@vimeo.com')
// console.log(searched)
// console.log(searched2)
