import User from './User.js';

export default class Admin extends User{
  constructor(nome, email, nascimento, role='admin', ativo = true){
    super(nome,email,nascimento,role,ativo)
  }


  criaCurso(nomeCurso, vagas = 0){
    return `Criou o curso: "${nomeCurso}" - ${vagas} vagas`
  }
}
