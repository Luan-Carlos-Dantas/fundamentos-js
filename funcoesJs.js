function calculadora(num1, num2, operacao){
  switch(operacao){
    case '+':
      return num1 + num2
      break;
    case '-':
      return num1 - num2
      break;
    case '/':
      return num2!==0 ? num1 / num2 : 'Não é possível dividir por zero'
      break;
    case '*':
      return num1 * num2
      break;
    case '**':
      return Math.pow(num1,num2)
      break;
    default:
      return('A operação não pode ser realizadas')
      break;
  }
}

const calc = calculadora(10, 5, 'a')

console.log(calc)
