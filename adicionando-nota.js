//DESAFIO -  Adicionando Elementos
//contexto -> um professor acidentalmente passou apenas 3 das 4 notas no sistema para um aluno
//          10, 6 e 8
// Para corrigir, adicione a nota 7 e faca o calculo da media correta.



const notas = [10, 6, 8];

notas.push(7); //.push -> adiciona um dado a uma array
console.log(notas);

const mediaI = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(mediaI)