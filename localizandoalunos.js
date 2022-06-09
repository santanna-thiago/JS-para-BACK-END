const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Marcos','Igor','Laís',]

const medias = [6.5,7.0,4.7,8.0,10.0,4.0,6.8
]

let nomeEmedia = [nomes,medias]//cria uma arrays com duas arrays ou uma matriz

const exibeNomeNota = (aluno) => {
    if (nomeEmedia [0].includes(aluno)){
        let indice = nomeEmedia[0].indexOf(aluno)
        return `A nota de ${nomeEmedia [0][indice]} é ${nomeEmedia[1][indice]}.`
        }
    else{
        return 'Aluno não encontrado'
        }    
    }
console.log(exibeNomeNota('Marcos'))
