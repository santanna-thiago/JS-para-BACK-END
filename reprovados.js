const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Marcos','Igor','Laís',]

const medias = [6.5,7.0,4.7,8.0,10.0,4.0,6.8]


const reprovados = nomes.filter((aluno,indice) => medias[indice] < 5) // filter retorna TRUE ou FALSE.

console.log (reprovados)
