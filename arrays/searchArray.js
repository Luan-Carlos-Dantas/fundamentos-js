const estudantes = ['Evaldo', 'Camis', 'Mari']
const medias = [10 , 9 , 6]

const lista = [[...estudantes],[...medias]]

function buscaAluno(nome){
  if(lista[0].includes(nome)){
    const i = lista[0].indexOf(nome)
    return `O aluno ${lista[0][i]} tem média igual a ${lista[1][i]}`
  }else{
    return `Aluno não está presente na lista de alunos`
  }
}
3
console.log(buscaAluno('Mari'))
