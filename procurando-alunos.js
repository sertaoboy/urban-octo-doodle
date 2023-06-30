// Desafio - Crie uma funcao que rebece como argumento o nome do aluno
// - Verifique se o aluno esta presente na lista e retorne a media final que se encontra no mesmo indice
// - Caso o nome do aluno nao esteja na lista, retorne "aluno nao encontrado"

const alunos = ["Joao", "Juliana", "Caio", "Ana"];
const media = [10, 8, 7.5, 9];
const listaDeAlunosEMedias = [alunos, media];

//function exibeNomeENota(nome) {
    //if (listaDeAlunosEMedias[0].includes(nome)) { // como funciona o metodo .includes -> verifica o parametro passado pra ele se esta INCLUSO na lista de alunos.
        //const indice = listaDeAlunosEMedias[0].indexOf(nome); // o metodo .indexOf(INDICE DE, do ingles) confere qual o indice(posicao) do nome referido
        //const media = listaDeAlunosEMedias[1][indice] // nessa linha a constante media se refere ao array [1] -> medias; e [indice] para retornar o indice a qual o valor da media se refere
        //console.log(`${nome} tem como media ${media}`);

    //} else {
        //console.log(`Aluno nao encontrado`)
    //}
//}
//exibeNomeENota('Raul')
////////////////////////////////////////////////////////////////////////
// Aprimorando o codigo -- tornando mais legivel
function exibeNomeENota(nome) {
    if (listaDeAlunosEMedias[0].includes(nome)) {
        const alunos = listaDeAlunosEMedias[0];
        const media = listaDeAlunosEMedias[1];

        const indice = alunos.indexOf(nome);
        const mediaDoAluno = media[indice];

        console.log(`${nome} tem media ${mediaDoAluno}.`); // obs: houve um erro de logica! eu havia colocado na template que se refere a media a constante "media"; apos isso ele retornava toda array de media: [10, 8, 7.5, 9] ao inves do indice especifico do aluno especifico. Apos trocar por  "mediaDoAluno", eu consegui!
    } else {
        console.log('aluno nao encontrado.');
    }
}
exibeNomeENota('Ana');
