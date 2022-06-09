// removendo um elemento de uma array

const notas = [10,6,8,5]
console.log(notas)
notas.pop()

console.log(notas)

notas.push(7)

console.log(notas)

let media = (notas[0]+notas[1]+notas[2]+notas[3])/notas.length

console.log(`A média é ${media}.`)