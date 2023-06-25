//DESAFIO - dividir alunos em salas
// - "Joao", "Juliana", "Ana", "Caio", "Lara", "Marjorie", "Guilhereme", "ALine", "Fabiana", "Andre", "Carlos", "Paulo", "BIa", "Vivian", "Isabela", "VInicius", "Renan", "Renata", "Daisy", "Camilo"
//              Dividir os alunos em duas salas (listas) com a mesma quantidade de alunos:
const alunos = ["Joao", "Juliana", "Ana", "Caio", "Lara", "Marjorie", "Guilhereme", "ALine", "Fabiana", "Andre", "Carlos", "Paulo", "BIa", "Vivian", "Isabela", "VInicius", "Renan", "Renata", "Daisy", "Camilo"];
                        
// const salaI = alunos.slice(0, 10); //.slice pega o primeiro indice(0) ate o nono (Andre). Utilizando o .slice ele desconsidera o indice 10
// const salaII = alunos.slice(10) // notar que este metodo qndo usado para dividir essa array, pode-se passar como parametro somente o indice 10 que o JS entende que ira dividir do indice 10 ate o final do array.

// console.log(alunos);
// console.log(salaI);
// console.log(salaII);

///////////////////////////////////////////////////////////
// Melhorias para deixar este codigo dinamico:
const salaI = alunos.slice(0, (alunos.length / 2));
const salaII = alunos.slice(10, alunos.length);

console.log(salaI);
console.log(salaII);
// Imaginar que este exemplo acima seria usado em um caso mais exigente no numero de alunos, por ex.: 50, 100 alunos ou mais.
