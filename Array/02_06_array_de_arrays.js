//02_06_array_de_arrays.js

const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];


const lista = [alunos, medias] ;

console.log(
    `a aluna da posição 1 da lista é: ${lista [0][1]}.
    a nota dessa aluna é ${lista[1][1]} `
)
//quando usamos `` aou invés de "" em strings, conseguimos quebrar linha
