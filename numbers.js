const notaPrimeiroBi = 8;
const notaSegundoBi = 6.3;
const notaTerceiroBi = -2;
const notaQuartoBi = Number.parseInt('5');

const nome = 'Luan'

console.log('Meu nome é '+nome)

const total = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi) / 4;
console.log(total.toFixed(1)), typeof(total)

let ponto = '*'

for(let i=0; i<=10; i++){
  console.log(ponto)
  ponto+='*'
}
