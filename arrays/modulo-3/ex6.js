// Exercício 6 - Reprovado!
// Dada uma lista de objetos que contém o nome de um aluno e sua média final, crie o método 'aprovados' que recebe esta lista e retorna somente os alunos que foram aprovados.

// Para isto, utilize o método filter.
let alunos = [
  { nome: 'Diogo', media: 5.5 },
  { nome: 'Julia', media: 9.5 },
  { nome: 'Roberto', media: 1.5 },
  { nome: 'Tiago', media: 6.0 }
];

const aprovados = alunos.filter(aluno=> aluno.media >= 6.5)

console.log(aprovados)
