/**
 * Calculadora JS - Exemplo de uso de funções
 * @author Gustavo
 */

// importação de pacote
const prompt = require('prompt-sync')()
const color = require('colors')

// variáveis globais
let num1, num2, opcao, resultado

// funções das operações (com parâmetros) recomendado antes da função principal
function somar(num1, num2) {
    return num1 + num2
}

function subtrair(num1, num2) {
    return num1 - num2
}

function multiplicar(num1, num2) {
    return num1 * num2
}

function dividir(num1, num2) {
    //validação
    if (num2 === 0) {
        console.log("")
        console.log("Erro! Impossível dividir por 0".red)
    } else {
        return num1 / num2
    }
}

function raizQuadrada(num1) {
    return Math.sqrt(num1)
}

function porcentagem(num1, num2) {
    return (num1 * num2) / 100
    
}

//===========================================
// função principal
function iniciarCalculadora() {
    // gerando um loop infinito
    do {
        mostrarMenu()
        //escolha da opção
        opcao = Number(prompt("Escolha uma opção: "))
        switch (opcao) {
            case 0:
                console.log("")
                console.log("Calculadora encerrada.")
                return // encerra o loop infinito
            case 1:
                console.log("")
                num1 = Number(prompt("Digite o primeiro número: "))
                num2 = Number(prompt("Digite o segundo número: "))
                resultado = somar(num1, num2)
                break
            case 2:
                console.log("")
                num1 = Number(prompt("Digite o primeiro número: "))
                num2 = Number(prompt("Digite o segundo número: "))
                resultado = subtrair(num1, num2)
                break
            case 3:
                console.log("")
                num1 = Number(prompt("Digite o primeiro número: "))
                num2 = Number(prompt("Digite o segundo número: "))
                resultado = multiplicar(num1, num2)
                break
            case 4:
                console.log("")
                num1 = Number(prompt("Digite o primeiro número: "))
                num2 = Number(prompt("Digite o segundo número: "))
                resultado = dividir(num1, num2)
            case 5:
                console.log("")
                num1 = Number(prompt("Digite o valor: "))
                resultado = raizQuadrada(num1)
                break
            case 6:
                console.log("")
                num1 = Number(prompt("Digite a porcentagem: "))
                num2 = Number(prompt("Digite o valor: "))
                resultado = porcentagem(num1, num2)
                break
            default:
                console.log("Opção inválida")
                prompt("Pressione [Enter] para continuar")
                continue // continua dentro do switch case
        }

        // exibir o resultado
        console.log("")
        console.log(`O resultado é: ${resultado.toFixed(2)}`.yellow)
        console.log("")
        prompt("Precione [Enter] para continuar")
    } while (true)
}

// Função Menu
function mostrarMenu() {
    console.clear()
    console.log("=== Calculadora JS ===")
    console.log("1. Somar")
    console.log("2. Subtrair")
    console.log("3. Multiplicar")
    console.log("4. Dividir")
    console.log("5. Raiz quadrada")
    console.log("6. Porcentagem")
    console.log("0. Sair")
}

// executar a função principal
iniciarCalculadora()