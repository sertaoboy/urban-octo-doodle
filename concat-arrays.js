// Desafio - Juntando salas
// Havera uma palestra para as alunas da sala Python e Javascript
// Junte amba as salas em uma unica lista que exiba todas as alunas.

const salaPython = ['Kirla', 'Ana', 'Leticia', 'Joana'];
const salaJS = ['Clara', 'Lia', 'Daphyne', 'Maria'];
// Usaremos o termo .concat para juntar arrays-> concatenecao
//    Nova Array-------Sala 1    +    Sala 2
const salasUnificadas = salaJS.concat(salaPython);
console.log(salasUnificadas);