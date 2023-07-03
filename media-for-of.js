const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let nota of notas) {
    somaDasNotas += nota;
}
//          o "for" acima e uma forma mais simples de escrever o "for" abaixo:
// for (let i = 0; i < notas.length; i++) {
//     console.log(notas[i]);
// }
const media = somaDasNotas / notas.length;
console.log(`A media das notas e ${media}.`)

// o for of e uma forma um pouco mais clara de escrever o for tradicional, mas depende da situacao e do contexto. O for of e mais indicado quando nao precisamos do indice, ou seja, quando nao precisamos saber em qual posicao estamos.

// q: de mais exemplos de quando usar o for of e quando utilizar o for tradicional
// r: quando precisamos do indice, utilizamos o for tradicional. Quando nao precisamos do indice, utilizamos o for of.
// q: como podemos saber se precisamos do indice ou nao?
// r: depende do contexto. Se precisarmos do indice, utilizamos o for tradicional. Se nao precisarmos do indice, utilizamos o for of.
// q: escreva exemplos de codigo diferindo os dois tipos
// r: ver abaixo 

// for of
const nomes = ["Daniel", "Maria", "Joao"];
for (let nome of nomes) {
    console.log(nome);
}

// for tradicional
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

// q: qual a vantagem de utilizar o for of?
// r: a sintaxe e mais simples e clara.

// q: qual a vantagem de utilizar o for tradicional?
// r: podemos utilizar o indice para acessar outros elementos da array, por exemplo, acessar o proximo elemento, o elemento anterior, etc.

// q: como podemos acessar o proximo elemento da array?
// r: podemos utilizar o indice e somar 1, por exemplo, nomes[i + 1]. Mas e se o elemento for o ultimo da array? Nesse caso, o indice sera maior que o tamanho da array, o que nao e permitido. Nesse caso, podemos utilizar o if para verificar se o indice e menor que o tamanho da array, por exemplo, if (i < nomes.length - 1) { nomes[i + 1] }.

// q: como podemos acessar o elemento anterior da array?
// r: podemos utilizar o indice e subtrair 1, por exemplo, nomes[i - 1]. Mas e se o elemento for o primeiro da array? Nesse caso, o indice sera menor que 0, o que nao e permitido. Nesse caso, podemos utilizar o if para verificar se o indice e maior ou igual a 0, por exemplo, if (i >= 0) { nomes[i - 1] }.

// q: como podemos acessar o elemento anterior e o proximo da array?
// r: podemos utilizar o indice e subtrair 1 e somar 1, por exemplo, nomes[i - 1] e nomes[i + 1]. Mas e se o elemento for o primeiro ou o ultimo da array? Nesse caso, podemos utilizar o if para verificar se o indice e maior ou igual a 0 e menor que o tamanho da array, por exemplo, if (i >= 0 && i < nomes.length - 1) { nomes[i - 1] e nomes[i + 1] }.  

// q: como podemos acessar o elemento anterior e o proximo da array, mas se o elemento for o primeiro ou o ultimo da array, acessar o proprio elemento?
// r: podemos utilizar o indice e subtrair 1 e somar 1, por exemplo, nomes[i - 1] e nomes[i + 1]. Mas e se o elemento for o primeiro ou o ultimo da array? Nesse caso, podemos utilizar o if para verificar se o indice e maior ou igual a 0 e menor que o tamanho da array, por exemplo, if (i >= 0 && i < nomes.length - 1) { nomes[i - 1] e nomes[i + 1] }. Mas e se o elemento for o primeiro da array? Nesse caso, podemos utilizar o if para verificar se o indice e igual a 0, por exemplo, if (i === 0) { nomes[i] e nomes[i + 1] }. Mas e se o elemento for o ultimo da array? Nesse caso, podemos utilizar o if para verificar se o indice e igual ao tamanho da array menos 1, por exemplo, if (i === nomes.length - 1) { nomes[i - 1] e nomes[i] }.

// q: escreve exemplos das respostas acima, em codigo
// r: ver abaixo

// acessar o proximo elemento da array
// const nomes = ["Daniel", "Maria", "Joao"];
// for (let i = 0; i < nomes.length; i++) {
//     if (i < nomes.length - 1) {
//         console.log(nomes[i + 1]);
//     }
// }

// // acessar o elemento anterior da array
// const nomes = ["Daniel", "Maria", "Joao"];
// for (let i = 0; i < nomes.length; i++) {
//     if (i >= 0) {
//         console.log(nomes[i - 1]);
//     }
// }

// // acessar o elemento anterior e o proximo da array
// const nomes = ["Daniel", "Maria", "Joao"];
// for (let i = 0; i < nomes.length; i++) {
//     if (i >= 0 && i < nomes.length - 1) {
//         console.log(nomes[i - 1]);
//         console.log(nomes[i + 1]);
//     }
// }

// // acessar o elemento anterior e o proximo da array, mas se o elemento for o primeiro ou o ultimo da array, acessar o proprio elemento
// const nomes = ["Daniel", "Maria", "Joao"];
// for (let i = 0; i < nomes.length; i++) {
//     if (i >= 0 && i < nomes.length - 1) {
//         console.log(nomes[i - 1]);
//         console.log(nomes[i + 1]);
//     } else if (i === 0) {
//         console.log(nomes[i]);
//         console.log(nomes[i + 1]);
//     } else if (i === nomes.length - 1) {
//         console.log(nomes[i - 1]);
//         console.log(nomes[i]);
//     }
// }

// q: como podemos acessar o elemento anterior e o proximo da array, mas se o elemento for o primeiro ou o ultimo da array, acessar o proprio elemento, de forma mais simples?
// r: podemos utilizar o if para verificar se o indice e maior ou igual a 0 e menor que o tamanho da array, por exemplo, if (i >= 0 && i < nomes.length - 1) { nomes[i - 1] e nomes[i + 1] }. Mas e se o elemento for o primeiro da array? Nesse caso, podemos utilizar o if para verificar se o indice e igual a 0, por exemplo, if (i === 0) { nomes[i] e nomes[i + 1] }. Mas e se o elemento for o ultimo da array? Nesse caso, podemos utilizar o if para verificar se o indice e igual ao tamanho da array menos 1, por exemplo, if (i === nomes.length - 1) { nomes[i - 1] e nomes[i] }. Mas e se o elemento for o primeiro ou o ultimo da array? Nesse caso, podemos utilizar o if para verificar se o indice e maior ou igual a 0 e menor que o tamanho da array, por exemplo, if (i >= 0 && i < nomes.length - 1) { nomes[i - 1] e nomes[i + 1] }. Mas e se o elemento for o primeiro da array? Nesse caso, podemos utilizar o if para verificar se o indice e igual a 0, por exemplo, if (i === 0) { nomes[i] e nomes[i + 1] }. Mas e se o elemento for o ultimo da array? Nesse caso, podemos utilizar o if para verificar se o indice e igual ao tamanho da array menos 1, por exemplo, if (i === nomes.length - 1) { nomes[i - 1] e nomes[i] }.







