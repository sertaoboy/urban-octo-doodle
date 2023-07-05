// // // Até agora vimos várias formas de fazer o que parece ser a mesma coisa: for, for…of, forEach()... Com tantas opções, como posso escolher qual usar no meu código?

// // Antes, vamos dar uma olhada em cada um deles:
// // for

// // A forma mais “clássica” de se efetuar um loop em JavaScript e em várias outras linguagens, o for é muito conveniente pois pode ser utilizado com qualquer tipo de iterável e é construído de uma forma que deixa muito claro quais são todas as “fases” de cada loop - também chamamos um loop de laço de repetição ou de iteração.

// const lista = [1, 2, 3, 4, 5];

// for (let indice = 0; indice < lista.length; indice++) {
//  console.log(lista[indice]); 
// }
// O que queremos dizer com “deixar claro as fases da iteração” pode ser visto no exemplo acima: a expressão entre parênteses () após a palavra-chave for. Dentro da expressão temos:

//     uma variável contadora, que é criada antes do início do laço (let indice);
//     uma expressão de teste (indice < lista.length), que é executada antes de cada iteração e que verifica se o código dentro do bloco {} deve ou não ser executado;
//     por último, uma expressão que é executada ao final de cada laço, normalmente um incremento (++) ou decremento (--) da variável contadora.

// Ou seja: como as fases de cada laço são declaradas de forma explícita, elas também podem ser alteradas conforme a necessidade do código, o que faz com que o for seja muito versátil e possa ser utilizado em casos específicos, quando os outras formas de sintaxe mais reduzida (como os que vamos ver em seguida) não atendem. O laço pode ser decremental ao invés de incremental (percorrer um array de trás para frente), a variável contadora pode receber outro valor como let indice = 2 ou let indice = outraVariavel + 1 (desde que esse valor seja avaliado como número), a condição de teste pode ser o tamanho do array como no exemplo, ou outro (indice < lista.length - 1) e o incremento ou decremento ao final do laço pode receber qualquer operador aritmético ou ser o resultado de uma operação, como indice = indice + 2 ou indice *= 2.

// //É possível, inclusive, usar o for para executar algoritmos mais complexos, que também não seriam possíveis com outros métodos, por exemplo: 
// const lista = [1, 2, 3, 4, 5];

// for (let i = 0, j = 0; i < lista.length; i++, j++) {
//  console.log(lista[i] + j);
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////
 
