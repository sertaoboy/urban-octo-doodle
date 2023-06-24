// ARRAYS ---> LISTAS -> estrutura de dados -> backend

//          desafio - calcular a media de alunos
// const nota1 = 10;
// const nota2 = 6.5;
// const nota3 = 8;                     Forma convencional 
// const nota4 = 7.5;

// const media = (nota1 + nota2 + nota3 + nota4)/4;
// console.log(media)
//                      INCONVENCIENCIA DO CODIGO -> valores fixo de notas; imaginar que tem que calcular a media de notas de varios alunos em uma escola ----> nesse contexto fica mais interessante ter uma ESTRUTURA DE DADOS ou seja, um array (lista). Como faz para criar? Ver abaixo

//posicoes:

//             0   1   2   3
const notas = [10, 6.5, 8, 7.5]; //sintaxe de um array ->[]
const media = (notas[0] + notas[1] + notas[2] + notas[3])/ notas.length //.length = propriedade que se refere a tamanho; no caso o tamanho da array-> quantidade de notas
console.log(media);

// como funcionam as arrays?
//          cada array precisa de um indentificador, no caso, "notas";
//          cada um dos seus valores esta armazenado entre [], um espaco na memoria da maquina
//              cada um desses valores podemos chamar de elementos, itens ou valores
//          cada um desses elementos e identificado por um valor unico numerico. SEMPRE comeca em 0, 1, 2, 3... Esses identificadores podemos chamar de indices ou posicoes
console.log(notas[2]);
console.log(notas[0]);
//          por ultimo, as listas no JS nao se restringem a um tipo de dado em uma unica array, por exemplo:
const arrayDados = [1, "oi", true, false];
//          porem e uma boa pratica que trabalhemos com um unico tipo de dado em uma array.


//Outros exemplos:
// const numero1 = 50;
// const numero2 = 43;
// const numero3 = 12;

// // utilizando array
// const numeros = [50, 43, 12];


