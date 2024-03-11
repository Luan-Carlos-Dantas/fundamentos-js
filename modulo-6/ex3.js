function deletaAmigos(amigos, exAmigos){
  for(excluidos of exAmigos){
    if(amigos.has(excluidos)){
      amigos.delete(excluidos)
      console.log('foi deletado!')
    }else{
      console.log('não é seu amigo!')
    }
  }

  return amigos
}

let amigos = new Map()
amigos.set('João Silva'	,{idade: 23, sexo: 'masculino'})
amigos.set('Luisa Pimenta'	,{idade: 18, sexo: 'feminino'})
amigos.set('Julio Marinho'	,{idade: 52, sexo: 'masculino'})
amigos.set('Marcela Mel'	,{idade: 27, sexo: 'feminino'})


console.log(deletaAmigos(amigos, ['Luisa Pimenta', 'João Silva']))
