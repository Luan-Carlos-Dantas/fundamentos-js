function percorreRuas(arr, final){
  for(rua of arr){
    if(rua !== final){
      return(rua)
    }else{
      break
    }
  }
}

function percorreRuas2(arr, perigosa){
  for(var rua of arr) {
    if(rua === perigosa) continue;
    console.log(rua);
  }
}

// console.log(percorreRuas(['Rua 1, Rua 2', 'Rua 3'], 'Rua 2'))


percorreRuas2(['Rua 1, Rua 2', 'Rua 3','Rua 4'], 'Rua 2')
