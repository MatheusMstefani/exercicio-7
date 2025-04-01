1. O que é JavaScript? Explique sua função no desenvolvimento web.

JavaScript é uma linguagem de programação que permite adicionar interatividade e dinâmica às páginas web, como validar formulários, mostrar mensagens, ou alterar conteúdo na página sem precisar recarregar.

2. Qual a diferença entre os três tipos de variáveis em JavaScript (var, let e const)?

var: Tem escopo global ou de função, e pode ser re-declarada e alterada.

let: Tem escopo de bloco, não pode ser re-declarada no mesmo bloco, mas pode ser alterada.

const: Também tem escopo de bloco, mas não pode ser alterada depois de definida.

3. O que acontece quando usamos o método prompt()? Qual tipo de dado ele retorna?

O prompt() exibe uma caixa de diálogo para o usuário inserir um valor. Ele retorna sempre uma string, mesmo que o usuário digite um número.

4. Qual a diferença entre alert(), confirm() e prompt()?

alert(): Mostra uma mensagem para o usuário e só tem um botão "OK".

confirm(): Mostra uma mensagem com opções "OK" e "Cancelar", retornando true ou false dependendo da escolha.

prompt(): Pede ao usuário para digitar algo e retorna o valor inserido como uma string.

5. Explique o que significa concatenar strings e dê um exemplo utilizando + e template literals.

Concatenar strings significa juntar duas ou mais strings. Pode ser feito com o operador + ou com template literals.

Usando +: "Olá, " + nome + "!"

Usando template literals: `Olá, ${nome}!`

6. Como podemos converter uma string para número em JavaScript? Dê um exemplo prático.

Podemos usar parseInt(), parseFloat() ou o operador + para converter uma string em número.

Exemplo com +: let numero = +prompt("Digite um número");

7. Qual a importância do toFixed(n) quando lidamos com operações matemáticas?

O toFixed(n) é usado para limitar o número de casas decimais em um número, o que é útil quando queremos apresentar o resultado de forma mais precisa, como em valores monetários.

