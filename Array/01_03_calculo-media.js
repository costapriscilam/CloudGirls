/*
const nota1 =10 ;
const nota2 = 6.5 ;
const nota3 = 8 ;
const nota4 = 7.5 ;
*/
const notas = [10, 6.5, 8, 7.5] ;

/*The keyword const is a little misleading.

It does not define a constant value. It defines a constant reference to a value.

Because of this you can NOT:

Reassign a constant value
Reassign a constant array
Reassign a constant object
But you CAN:

Change the elements of constant array
Change the properties of constant object
*/

const media = (notas [0] + notas[1] + notas[2] + notas[3]) / notas.length ;

//todo array é uma lista numerada que começa no índice 0 até n
//para acessar o valor de uma rray é necessário acessar o o número do indíce

//os índices de um array em JavaScript são números inteiros que representam a posição de cada elemento no array. Internamente, esses índices são tratados como chaves de um objeto, e os elementos são armazenados sequencialmente na memória conforme são adicionados ao array. Isso permite acessar rapidamente os elementos usando seus índices correspondentes.

console.log(media) ;