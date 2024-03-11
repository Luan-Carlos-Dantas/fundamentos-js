let musica1 = {
  titulo: 'O amor não tem rollback',
  autor: 'SQL'
}
let musica2 = {
  titulo: 'Nada se componentiza a você',
  autor: 'React'
}

let musicas = new WeakSet([musica1, musica2]);
for(let musica in musicas){
  console.log(musica);
}
