const bruxos = ['Harry Potter', 'Hermione Granger', 'Rony Weasley']

let iteradorBruxos = bruxos[Symbol.iterator]()

console.log(iteradorBruxos.next())
console.log(iteradorBruxos.next())
console.log(iteradorBruxos.next())
console.log(iteradorBruxos.next())
