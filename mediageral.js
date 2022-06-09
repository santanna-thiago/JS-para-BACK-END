const sala1 = [2,6,9,10,8]
const sala2 = [10,9,8.5,4.5,5,4.2]
const sala3 = [4,6.2,7,4.5,5]



function mediaSala(notasDaSala){
    const somaDasNotas = notasDaSala.reduce ((acumulador, atual) => atual + acumulador,0)//reduz todos os valores de um array em um único valor
    return somaDasNotas/notasDaSala.length
}

console.log(mediaSala(sala1))
console.log(mediaSala(sala2))
console.log(mediaSala(sala3))