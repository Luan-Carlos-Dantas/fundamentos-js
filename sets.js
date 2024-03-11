// function Set(){
//   let arr = []
//   this.add = function(valor){
//     if(arr.indexOf(valor) === -1){
//       arr.push(valor)
//     }
//   }

//   this.mostraValores = function(){
//     console.log(arr)
//   }
// }

let set = new Set([1,2,3,5,4,6,5,1])
// set.add(2)
// set.add(1)
// set.add(2)
set.delete(4)
// set.clear()
console.log(set.has(7))
console.log(set.has(5))
console.log(set.size)

for(let valor of set){
  console.log(valor)
}
