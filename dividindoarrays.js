// dividindo uma array

const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Marcos','Igor','Laís','Camila','Mirela', 'Natália','Murilo', 'Eduardo', 'Felipe', 'Daví', 'Julia', 'Aline', 'Artur', 'Sabrina', 'Luiza', 'Isabela', 'Thiago']

console.log(nomes.length)

const sala1 = nomes.slice(0,nomes.length/2);
const sala2 = nomes.slice(nomes.length/2,);

console.log(sala1)
console.log(sala2)