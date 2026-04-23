/**
 * Exemplo de uso da estrutura switch case
 * @author Gustavo
 */

const prompt = require('prompt-sync')()

let opcao

console.clear()
console.log("Menu de opções")
console.log("")
console.log("1. cadastro de clientes")
console.log("2. Cadastro de produtos")
console.log("3. Relatórios")

opcao = Number(prompt("Digite a opção desejada: "))

//Uso da estrtutura switch case para tratamento do valor digitado
//OBS: essa estrutura aceita variáveis numéricas do tipo números inteiros e caracteres únicos, dentro da estrutura o defaut é opcional
switch (opcao) {
    case 1:
        console.clear()
        console.log("Tela de cadastro de clientes")
        break;
    case 2:
        console.clear()
        console.log("Tela de cadastro de produtos")
        break;
    case 3:
        console.clear()
        console.log("Impressão de relatórios")
        break;
}