// Deixando o codigo 'procurando-alunos.js' mais legivel

// const alunos = ["Joao", "Juliana", "Caio", "Ana"];
// const media = [10, 8, 7.5, 9];
// const listaDeAlunosEMedias = [alunos, media];

// function exibeNomeENota(nome) {
//     if (listaDeAlunosEMedias[0].includes(nome)) {
//         const alunos = listaDeAlunosEMedias[0];
//         const media = listaDeAlunosEMedias[1];

//         const indice = alunos.indexOf(nome);
//         const mediaDoAluno = media[indice];

//         console.log(`${nome} tem media ${mediaDoAluno}.`); // obs: houve um erro de logica! eu havia colocado na template que se refere a media a constante "media"; apos isso ele retornava toda array de media: [10, 8, 7.5, 9] ao inves do indice especifico do aluno especifico. Apos trocar por  "mediaDoAluno", eu consegui!
//     } else {
//         console.log('aluno nao encontrado.');
//     }
// }
// exibeNomeENota('Caio');

// Outra forma de deixar o codigo mais legivel:

const alunos = ["Joao", "Juliana", "Caio", "Ana"];
const media = [10, 8, 7.5, 9];
const listaDeAlunosEMedias = [alunos, media];

function exibeNomeENota(nome) {
    if (listaDeAlunosEMedias[0].includes(nome)) {
        //const alunos = listaDeAlunosEMedias[0];
        //const media = listaDeAlunosEMedias[1];

        const [alunos, media] = listaDeAlunosEMedias; // essa nova sintaxe -> const = [] -> faz o mesmo papel das duas linhas comentadas acima

        const indice = alunos.indexOf(nome);
        const mediaDoAluno = media[indice];

        console.log(`${nome} tem media ${mediaDoAluno}.`); 
    } else {
        console.log('aluno nao encontrado.');
    }
}
exibeNomeENota('Caio');

