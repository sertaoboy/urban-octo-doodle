// Os laços de repetição, como o for, são ferramentas essenciais na programação. São utilizados para, entre outras coisas, percorrer arrays e executar blocos de código para cada elemento.
// Porém, quando usamos for para executar códigos em loop, temos que deixar claro qual é a condição de execução do loop. Caso contrário, o programa não sabe em que momento deve parar de executar o loop, acaba ficando “preso” e entrando em loop infinito.
// O loop infinito pode travar seu navegador, o terminal em que o código estiver sendo executado, ou até mesmo o computador, então é importante saber como evitá-lo.

//Abaixo temos um exemplo de for que imprime no terminal números de 0 a 10:
 const numeros = [100, 200, 300, 400, 500, 600];
    // for (let indice = 0; indice <= 10; indice++) {
    // console.log(indice);
    // }
// O código executa corretamente e o programa é capaz de encerrar o loop, pois a condição de execução indice <= 10 está correta, a variável indice que faz o controle do loop começa em 0 e ao fim de cada ciclo do loop, é aumentada em 1 (indice++). Quando o valor da variável de controle indice chega a 11, depois de imprimir o número 10 no terminal, a comparação indice <= 10 se torna false e isso encerra o loop.

//O loop infinito pode acontecer caso alguma das expressões seja passada de forma incorreta ou esteja faltando. Por exemplo a terceira, responsável por alterar indice após o bloco de código dentro do for ter sido executado:
for (let indice = 0; indice <= 10; ) {
    console.log(indice); // meu terminal ficou imprimindo 0 em um loop infinito, tive que apertar o comando CTRL + C(cancel)
  }

//Outro caso que pode gerar loop infinito é o de alterações feitas na variável de controle dentro do bloco do for, o que não é uma boa prática:
for (let indice = 0; indice < 10; indice++) {
    indice--;
    console.log(indice); //**Nem ousei executar o codigo...... */
  }
 
  
