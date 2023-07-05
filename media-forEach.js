// Desafio - media com forEach:
//  calcular a media entre as seguintes notas usando o metodo forEach:
// 10,6.5,8 e 7.5

const notas = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;

notas.forEach(function(nota) { // reparar que a funcao forEach recebe uma funcao como parametro (quando uma funcao e parametro de outra, ela e chamada de callback); essa funcao e chamada de funcao anonima; ela e uma funcao que sera chamada a cada interacao do forEach(laco de repeticao), mais especificamente para cada elemento do array de "notas"
    somaDasNotas += nota;
});

const media = somaDasNotas / notas.length;

console.log(`A media e ${media}.`);

// vantagem do forEach em relacao ao forOf: o forEach e mais simples de ser usado, pois ele ja tem uma estrutura pronta, enquanto o forOf e mais flexivel, mas e mais complexo de ser usado, pois ele nao tem uma estrutura pronta, sendo necessario criar uma estrutura para ele, como no exemplo abaixo:

const notas2 = [10, 6.5, 8, 7.5];
let somaDasNotas2 = 0;

for (let i = 0; i < notas2.length; i++) {
    somaDasNotas2 += notas2[i];
}

const media2 = somaDasNotas2 / notas2.length;

console.log(`A media e ${media2}.`);

// o forEach e um metodo de array, ou seja, ele so pode ser usado em arrays; ele recebe uma funcao como parametro, que sera chamada para cada elemento do array; essa funcao recebe como parametro cada elemento do array; essa funcao pode receber ate 3 parametros, sendo o primeiro o elemento do array, o segundo o indice do elemento e o terceiro o proprio array; o forEach nao retorna nada, ele apenas executa uma funcao para cada elemento do array; o forEach e um metodo de array, ou seja, ele so pode ser usado em arrays; ele recebe uma funcao como parametro, que sera chamada para cada elemento do array; essa funcao recebe como parametro cada elemento do array; essa funcao pode receber ate 3 parametros, sendo o primeiro o elemento do array, o segundo o indice do elemento e o terceiro o proprio array; o forEach nao retorna nada, ele apenas executa uma funcao para cada elemento do array;


//obs: o += nos dois exemplos de codigo se refere a somaDasNotas = somaDasNotas + nota;