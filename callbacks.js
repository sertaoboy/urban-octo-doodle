const nomes = ['evaldo', 'daniel', 'japa'];

nomes.forEach(function(nome){
    console.log(nome);
});

nomes.forEach((nome) => {
    console.log(nome);
});

function imprimeNome(nome) {
    console.log(nome);
}


// Acima temos 3 formas de se usar o forEach, sendo a primeira uma funcao anonima, a segunda uma arrow function e a terceira uma funcao normal; a primeira e a segunda sao as mais usadas, sendo a segunda a mais usada de todas; a terceira e a menos usada, pois ela e mais complexa de ser usada, pois ela e uma funcao normal, sendo necessario criar uma funcao para ela, como no exemplo abaixo:

nomes.forEach(imprimeNome); 

