// exercicio 8
let nome = prompt("Qual é o seu nome?");
document.write("Olá, " + nome + " Bem-vindo ao nosso site!" + "<br>" );

// exercicio 9

let celsius = prompt("Digite a temperatura em graus Celsius:");

let fahrenheit = (celsius * 9/5) + 32;

document.write(celsius + "°C é igual a " + fahrenheit + "°F." + "<br>");

// exercicio 10

let num1 = Number (prompt("Digite o primeiro número:"));
let num2 = Number (prompt("Digite o segundo número:"));

let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;

document.write("Soma: " + soma + "<br>");
document.write("Subtração: " + subtracao + "<br>");
document.write("Multiplicação: " + multiplicacao + "<br>");
document.write("Divisão: " + divisao + "<br>");

// exercicio 11

let idade = parseInt(prompt("Qual é a sua idade?"));

if (idade >= 18) {
  document.write("Você é maior de idade." + "<br>");
} else {
  document.write("Você é menor de idade." + "<br>");
}

// exercicio 12

let precoOriginal = Number (prompt("Digite o preço original do produto: "));

let desconto = Number (prompt("Digite a porcentagem de desconto: "));

let precoFinal = precoOriginal - (precoOriginal * (desconto / 100));

document.write("O preço final com desconto é: R$ " + precoFinal + "<br>");

// exercicio 13

let valorBRL = Number (prompt("Digite o valor em reais (BRL):"));

let cotacaoUSD = 5.68; 

let valorUSD = valorBRL / cotacaoUSD;

document.write("O valor em dólares (USD) é: $ " + valorUSD);