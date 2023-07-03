// DESAFIO - Media; calcular a media entre as seguintes notas usando o for: 10, 6.5, 8 e 7.5

const notas = [10, 6.5, 8, 7.5];
let somaDasNotas = 0; //pq 0? explicacao abaixo 

for(let i = 0; i < notas.length; i++) { //  VAR de controle -1a expressao do "for"; Condicao de parada - 2a expressao; incremento de controle da variavel- 3a expressao
// A variavel indice pode ser substituida pela letra "i"
    somaDasNotas += notas[i]; // como somaDasNotas = 0, quando executado pela PRIMEIRA VEZ, "for" vai pegar o primeiro elemento (ou seja, indice 0, i = 10, na segunda exec i = 6.5 e assim por diante)
}

const media = somaDasNotas / notas.length;
console.log(`A media das notas e ${media}.`);
