// Desestruturacao
//  sintaxe para extrair dados, tanto de arrays ou objetos no JS.
// exemplos:

const numerosPares = [2, 4, 6];
const numerosImpares =  [1, 3, 5];
const numeros = [numerosPares, numerosImpares];
console.log(numeros); // [ [ 2, 4, 6 ], [ 1, 3, 5 ] ]
// reparar que 'numeros' retorna uma array de arrays
// para evitar essa array mais externa de numeros, notar esse exemplo: 



const numerosSomente = [...numerosPares, ...numerosImpares];
console.log(numerosSomente); // [ 2, 4, 6, 1, 3, 5 ]
// retornou os numeros da primeira array com os numeros da segunda array, sem dividr em 2 arrays, estao como se fosse somente em 1; sintaxe chave desse exemplo -> "..."




// outro exemplo utilizando "..."
const [numI, numII,] = [1, 2];
console.log(numI, numII); // 1 2
const [num1, num2, ...numX] = [1, 2, 4, 5, 6];
console.log(num1, num2, numX);// 1 2 [ 4, 5, 6 ]



//     VALOR PADRAO --> valor padrao sera utilizado se for undefined
const [nome1 = 'Ju'] = []
console.log(nome1); // Ju


const pessoa = {
    nome: 'Ju', 
    idade: 25
}
const pessoaComTelefone = {
    ...pessoa, telefone: 15641561651 
}
console.log(pessoa, pessoaComTelefone); //{ nome: 'Ju', idade: 25 } { nome: 'Ju', idade: 25, telefone: 15641561651 }





const { idade } = pessoa
console.log(idade); // 25




function imprimeDados({nome, idade}) {
    
    console.log(nome, idade)
}
imprimeDados(pessoa); // Ju 25



