// Uso clássico de for
/*
const lista = [100,200,300,400,500,600]

for (let i=0;i<lista.length;i++){
    console.log(i,lista[i])
}
*/

const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Marcos','Igor','Laís',]
const medias = [6.5,7.0,4.7,8.0,10.0,4.0,6.8
]

let nomeEmedia = [nomes,medias]//cria uma arrays com duas arrays ou uma matriz
for (let i=0;i<nomes.length;i++){
    console.log(`${nomeEmedia[0][i]} ${nomeEmedia[1][i]}`)
}