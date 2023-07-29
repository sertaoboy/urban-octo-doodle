const nomes = ["Ana", "Clara", "Maria", "Maria" , "Joao", "Joao", "Joao",];

const meuSet = new Set(nomes);

const nomesAtualizados = [...meuSet];

console.log(nomesAtualizados);

// acima temos um exemplo de como podemos remover os valores duplicados de um array, utilizando o Set, que é uma estrutura de dados que não aceita valores duplicados, e para transformar o Set em um array, utilizamos o spread operator. Spread operator é representado por três pontos, e ele serve para quebrar um array em itens individuais, ou para juntar itens individuais em um array.

// const nomesAtualizados so esta transformando o Set em um array, mas não esta removendo os valores duplicados, para isso, precisamos utilizar o spread operator dentro de um array, e passar o Set como parametro, e assim, ele ira quebrar o Set em itens individuais, e depois ira juntar esses itens em um array, e assim, os valores duplicados serão removidos.