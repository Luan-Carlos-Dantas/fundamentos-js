import User from "./User.js";

export default class Docentes extends User{
  constructor(nome, email, nascimento, role='docente', ativo=true){
    super(nome,email,nascimento)
  }

  aprovaEstudante(estudante,nota,curso){
    if(nota >= 6.75) {return `Estudante: ${estudante}, foi aprovado no curso ${curso}`}
    else{return `Estudante: ${estudante}, não foi aprovado no curso ${curso}`}
  }
}
