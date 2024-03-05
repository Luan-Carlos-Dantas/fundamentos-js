// Exercício 1 - Par ou ímpar?
// Altere o código a seguir para utilizar o método forEach de modo que a saída permaneça a mesma.
let numeros = [0,1,2,3,4,5];

numeros.forEach(numero =>{
  if(numero%2===0){
    console.log(`${numero} - PAR`)
  }else{
    console.log(`${numero} - ÍMPAR`)
  }
})
