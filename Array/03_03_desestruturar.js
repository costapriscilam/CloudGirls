//03_03_desestruturar.js

const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

function exibeNomeENota(aluno){
    if (lista[0].includes(aluno)) {
        const [alunos, medias] = lista;
        const indice = alunos.indexOf(aluno) ;
        const mediaAluno = medias[indice]
        console.log(`${aluno} tem a média ${mediaAluno}`);
    } else {
        console.log('Estudante não existe na lista');
    }
}

//O que faz a desestruturação? Lembrando que sempre que temos o operador de atribuição, ou seja, igual, sempre olhamos para a direita primeiro e depois para a esquerda. O que o JavaScript vai fazer? Ele vai pegar a lista, que é nosso array de arrays, e vai desestruturar o conteúdo dessa lista. Qual é o conteúdo dessa lista? Dois arrays, um de alunos e um de medias.
//Fazendo isso, o JavaScript vai jogar cada um desses conteúdos desestruturados em uma nova variável, que estamos chamando nesse momento de alunos e medias, e isso será feito por ordem. Então, o primeiro elemento do array de listas será desestruturado dentro de uma variável alunos, e o segundo dentro de uma variável medias.


exibeNomeENota ('Juliana')
exibeNomeENota ('Mari')