

/*
let soma = 0

notas.forEach(nota =>{
    soma += nota
})

let media = soma/notas.length

console.log(media)
*/

const notas = [6.5,7.9,4.6,8,10.0,4.2,6.8]

const notasAtualizadas = notas.map (nota => nota == 10.0 ? nota : nota+1)

console.log(notasAtualizadas)