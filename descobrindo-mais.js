// Já utilizamos alguns métodos dos arrays nessa aula, e ainda existem muitos métodos que não vimos. Porém, pode ainda ter ficado a dúvida: o que são os métodos?

// Um método é uma função que serve como uma propriedade do array ou de um objeto (que veremos em outro curso). Ele pode realizar tarefas pré-definidas usando os dados do array e dos parâmetros que passamos para eles, como adicionar, remover ou até encontrar elementos.

// Existem muitos métodos para conseguir lembrar de todos, mas vamos listar os principais para a aprendizagem. São eles:
            concat();
                // junta dois arrays, colocando o array passado como argumento, logo depois do primeiro. Concat = concatenacao.
            filter();
                // retorna uma lista contando todos os elementos que passaram por um teste, ou seja, uma funcao criada por nos.
            find();
                // funciona de forma parecida com o filter, porem retorna apenas o primeiro valor que satisfazer o teste, podendo ser uma string ou um number.
            findIndex();
                // funciona igual o "find()", mas retorna o indice ao inves do elemento, possibilitando usa-lo em outras partes do codigo.
            lastIndex();
                // e igual ao "findIndex()" porem comeca do ultimo elemento, nao no primeiro.
            forEach();
                // executa uma funcao em cada elemento do array de forma individual. Nao altera o array original e nem retorna um valor, deixando esse trabalho a cargo da funcao escolhida.
            pop();
                // retira o ultimo elemento de uma array. ALtera o array original removendo o elemento.
            shift();
                // retira o primeiro elemento de uma array. Altera o array original removendo o elemento e trocando o indice de todos os elementos para um a menos do que eram, o indice 1 passar ser o 0, o 2 passa a ser o 1, essim por diante.
            push();
                // adiciona o elemento passado como parametro do array, porem na ultima posicao. Altera o array original com o novo valor.
            unshift();
                // funciona igual ao "push()", porem adiciona na primeira posicao e acaba trocando o indice de todos os elementos. Altera o array original com o novo valor.
            reduce();
                // utiliza uma funcao definida pelo usuario em cada um dos elementos, guardando o resultado em uma variavel que pode ser acessada dentro da funcao que foi definida, retornando um unico valor no final, reduzindo o array para um unico valor.
            reduceRight();
                // funciona igual o "reduce()" porem comeca no final da array e segue ate o inicio.
            reverse();
                // inverte a ordem dos elementos do array, entao o primeiro vira o ultimo, e o segundo o penultimo e assim por diante.
            slice();
                // copia uma parte do array para outro array.
            sort();
                // organiza o array de acordo com a classificacao Unicode, onde os numeros vem antes das letras, porem nao funciona corretamente para numeros, onde temos que definir uma funcao que ira auxiliar o comando.
            splice();
                // consegue remover, um ou mais elementos consecutivos caso o segundo parametro tenha um valor > 0, e incluir um ou mais elementos a partir de um indice escolhido.