function removeDuplicatas(arr){
  const listaSemDuplicatas = new Set([...arr])

  return listaSemDuplicatas
}

const arr = [1,1,2,2,3,3]

console.log(removeDuplicatas(arr))
