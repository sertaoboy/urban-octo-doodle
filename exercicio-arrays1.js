animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

animaisDoAquario.splice(1,0,'🐠') // repara que nessa linha, o indice 1 seria o lugar para o '🐠', mas sem remover nenhum elemento apos dele, ou seja, '🐙' ainda esta no array --> [ '🐋', '🐠', '🐙', '🐬', '🦈' ] - ARRAY ATUALIZADA
animaisDoAquario.splice(3,2,'🐟') // nessa linha, trabalhando em cima da array atualizada, se remove o indice 3 ('🐬') e a partir dele mais 2 elementos (porem so tem mais 1 elemento depois do indice, logo, '🦈' e removido) e no lugar se adiciona o elemento '🐟'

console.log(animaisDoAquario) // [ '🐋', '🐠', '🐙', '🐟' ]
                            //     array atualizada apos os metodos .splice!