// Desafio 16: médias das turmas

// Com a média de todos os alunos de 3 salas, calcule a média geral de cada sala:

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala) {
   const somaDasNotas = notasDaSala.reduce((acc, nota) => { // acc = acumulador, nota = nota atual
        return acc + nota; // acc = acc + nota
    }, 0)
    const media = somaDasNotas / notasDaSala.length;

    return media;
}
console.log(`A media da sala de java script e ${calculaMedia(salaJS)}`);
console.log(`A media da sala de java e ${calculaMedia(salaJava)}`);
console.log(`A media da sala de python e ${calculaMedia(salaPython)}`);
