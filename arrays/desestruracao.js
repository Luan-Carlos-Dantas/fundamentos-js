const estudantes = ['Evaldo', 'Camis', 'Mari']
const medias = [10 , 9 , 6]

const lista = [[...estudantes],[...medias]]

function buscaAluno(nome){
  const [alunos, medias] = lista
  if(alunos.includes(nome)){
    const i = alunos.indexOf(nome)
    return `O aluno ${alunos[i]} tem média igual a ${medias[i]}`
  }else{
    return `Aluno não está presente na lista de alunos`
  }
}
console.log(buscaAluno('Mari'))
