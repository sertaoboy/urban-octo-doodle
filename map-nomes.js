// desafio - padronizando nomes
// precisamos padronizar a lista de alunos para conter letras maiusculas:
//          ["ana Julia", 'Caio vinicius', 'BIA silva']

const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomesAtualizados = nomes.map((nomes) => {
    return nomes.toUpperCase();
});

console.log(nomesAtualizados);