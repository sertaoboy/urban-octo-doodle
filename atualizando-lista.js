// Desafio - criar uma lista de chamada com os seguintes alunos: "Joao", "Ana", "Caio", "Lara", "Marjorie", "Leo"
// Porem Ana e Caio trocaram de escola e o Rodrigo entrou nessa sala. Atualize a lista. (aprendendo agora como remover um item do MEIO da lista)

const nomes = ["Joao", "Ana", "Caio", "Lara", "Marjorie", "Leo"];
nomes.splice(1, 2, "Rodrigo"); // .splice(x, y), onde x determina o INDICE que queira ser removido, e o segundo parametro (y) seria a quantidade de indice que queremos remover A PARTIR do indice X!!!!!
//OBS: utilizando o .push, adiciona o indice ao final da lista; colocando o "Rodrigo" como terceiro parametro dentro do .splice ele ocupa o lugar de onde tiramos os itens "Ana" e "Caio"

// nomes.push("Rodrigo"); // desta maneira adicionei o Rodrigo ao final da lista

console.log(nomes);

///////////////////////////////////////////////////////////
// O .splice e utilizado para adicionar e/ou remover elementos de uma lista