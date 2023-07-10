//  Desafio - Ponto extra
// um aluno recebeu um ponto estra nas suas notas. Adicione esse ponto nas notas da seguinte lista
// 10, 9.5, 8, 7, 6

///////////////////////////////////////////////////////////
// Metodo do professor - map

const notas = [10, 9.5, 8, 7, 6];

const notasAtualizadas = notas.map((notas) => { //map -> percorre a array e retorna um novo array (neste caso adicionando 1 em cada indice da array)
    return notas + 1 >= 10 ? 10 : notas + 1;  // para nao ultrapassar 10, utilizei um ternario para verificar se o valor da nota + 1 é maior ou igual a 10, se sim, retorna 10, se nao, retorna o valor da nota + 1
});

console.log(notas); // [ 10, 9.5, 8, 7, 6 ] -> o map nao altera o array original, temos que retribuir o retorno do map para um novo array

console.log(notasAtualizadas); // [ 11, 10.5, 9, 8, 7 ] -> novo array com os valores atualizados, porem, nao pode ultrapassar o valor de 10 (nota maxima) 
