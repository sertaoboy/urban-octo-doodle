// Desafio - Criar uma lista contendo: "Joao", "Juliana", "Caio", "Ana"
//           Criar outra lista com as seguintes medias: 10, 8, 7.5, 9
//              Crie uma lista que contenha as duas listas acima.

const alunos = ["Joao", "Juliana", "Caio", "Ana"];
const media = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, media];
console.log(listaDeAlunosEMedias);

console.log(`A aluna da posicao 1 da lista de alunos e: ${listaDeAlunosEMedias[0][1]}. A nota dessa aluna e: ${listaDeAlunosEMedias[1][1]}`);
////////////////////////////////////////////////////////////////////////
// vimos as listas com duas dimensões, ou seja, arrays que contêm arrays, podendo ter um único array ou vários dentro do principal.

// const nomes = ["Ana", "Juliana", "Leonardo"];
// const idades = [30, 35, 28];
// const faculdade = [false, true, true];

// const funcionarios = [nomes, idades, faculdade];

// O array funcionarios é um array de duas dimensões. Há 3 arrays dentro dele, e para acessar os valores em funcionarios precisamos de 2 colchetes “[ ] [ ]”. O primeiro colchete será usado para escolher qual dos 3 arrays dentro de funcionarios será acessado. podendo ser:

//     0 -> nomes
//     1 -> idades
//     2 -> faculdade

// O segundo colchete será usado para acessar a informação dentro do array escolhido.

// Outra forma de chamar os arrays de 2 dimensões é matrizes. Matrizes podem ser visualizadas como uma tabela do Excel, onde cada campo representa um elemento, e precisamos de uma linha e uma coluna para acessar um campo. Então, as linhas são o primeiro colchete e a coluna o segundo colchete.

// Arrays têm seu principal uso quando temos uma grande quantidade de informações com propósitos similares, como as notas de um aluno. Matrizes, por sua vez, são utilizadas quando precisamos de vários arrays similares ou com informações ligadas às outras, como as notas de uma classe com vários alunos.

// As matrizes não são limitadas a 2 dimensões, podendo ter mais dimensões, de modo que cada dimensão é representada por um colchete. Porém, tome cuidado para não se perder dentro delas, já que se uma matriz passa a ter, por exemplo, 4 ou 5 dimensões, se torna bem difícil saber exatamente o que está sendo acessado e começamos a ter problemas para fazer a manutenção do código.
// Discutir no Forum

