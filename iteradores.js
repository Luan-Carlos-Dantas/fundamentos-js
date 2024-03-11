//obtém o iterador
let bruxos = ['Harry Potter', 'Hermione Granger', 'Rony Weasley']

let iteradorBruxos = bruxos[Symbol.iterator]()
let done = false
let proximo = iteradorBruxos.next()

function chapeuSeletor(bruxo){
  let random = Math.floor((Math.random + 4 - 1) * 100)
  if(random <= 1){
    return `${bruxo} - Grifinória`
  }

  if(random <= 2){
    return `${bruxo} - Lufa Lufa`
  }

  if(random <= 3){
    return `${bruxo} - Sonserina`
  }

  if(random <= 4){
    return `${bruxo} - Corvinal`
  }
}

do{
  let bruxo = proximo.value
  console.log(chapeuSeletor(bruxo));
  proximo = iteradorBruxos.next()
}while(!proximo.done)
