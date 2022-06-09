// calculo de média usando for
/*
const notas = [6.5,7.0,4.7,8.0,10.0,4.0,6.8]

let soma = 0
for(let i=0;i<notas.length;i++){
    soma += notas[i];
}

let media = soma/notas.length

console.log(media)
*/

const notas = [6.5,7.0,4.7,8.0,10.0,4.0,6.8]

let soma = 0

notas.forEach(nota =>{
    soma += nota
})

let media = soma/notas.length

console.log(media)
