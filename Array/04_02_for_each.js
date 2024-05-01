//04_02_for_each.js

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0 ;

notas.forEach(function(nota) {
    somaDasNotas += nota;
})

//Essa função vai ser executada para cada elemento do array. É o que chamamos de “função callback”, quando uma função é passada como parâmetro de outra função e executada dentro deste contexto.


const media = somaDasNotas/notas.length

console.log(`a média das notas é ${media}`)