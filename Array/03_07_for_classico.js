//03_07_for_classico.js

const notas =[10, 8.5, 5, 6.5, 8, 7.5];

//primeira expressão: executada apenas 1 vez
    //java cria a variável na memória
//segunda expressão: condição de execução
    //verifica se tem que executar ou não
//terceira expressão: executada sempre ao final do bloco
    //incrementa e dá continuidade

for (let indice = 0; indice < notas.length; indice++) {
    console.log(indice, notas[indice]);
}