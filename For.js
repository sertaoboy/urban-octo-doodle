// DESAFIO - imprima o indice e a lista com os seguintes numeros : 100, 200, 300, 400, 500, 600

const numeros = [100, 200, 300, 400, 500, 600];
//console.log(numeros[0]);
// p evitar a repeticao, utiliza se o comando abaixo

for(let indice = 0; indice < numeros.length; indice ++) { // o ++ refere-se nessa linha igual a indice = indice + 1 OU indice += 1
    console.log(numeros[indice]);

}

// termo "for" e constituido por tres expressoes entre parenteses, separadas por ";"
    // Primeira expressao : e executada apenas uma unica vez
    // Segunda expressao: condicao de execucao //OBS: eu havia definido indice < 6, oque limitava a somente 6 indices na array numeros : se houvesse menos ou mais elementos na arrays retornava undefined. Para deixar o valor dinamico, utiliza-se "numeros.length"
    // Terceira expressao: e executada sempre ao final do bloco

// ESSA E A FORMA MAIS CLASSICA DE ESTRUTURAS DE REPETICAO
