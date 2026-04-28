/**
 * Desafio JokenPo
 * @author Gustavo
 */

// importação de pacote
const prompt = require('prompt-sync')()

// variáveis
let jogador, computador, novoJogo = "n"

// UX
do {
console.clear()
console.log("    __     _____         _____   ")
console.log(" __|  |___|  |  |___ ___|  _  |___ ")
console.log("|  |  | . |    -| -_|   |   __| . |")
console.log("|_____|___|__|__|___|_|_|__|  |___|")


// lógica do jogador
console.log("1. Pedra")
console.log("2. Papel")
console.log("3. Tesoura")
jogador = Number(prompt("Digite a opção desejada: "))
console.log("")
switch (jogador) {
    case 1:
        console.log("Jogador escolheu Pedra")
        break
    case 2:
        console.log("Jogador escolheu Papel")
        break
    case 3:
        console.log("Jogador escolheu Tesoura")
        break
    default:
        console.log("Opção inválida")
        break
}

// lógica do computador
computador = Math.ceil(Math.random() * 3) // 1 , 2 ou 3
switch (computador) {
    case 1:
        console.log("Computador escolheu Pedra")
        break
    case 2:
        console.log("Computador escolheu Papel")
        break
    case 3:
        console.log("Computador escolheu Tesoura")
        break
}

// lógica para determinar o vencedor ou declarar empate
if (jogador === computador) {
    console.log("          EMPATE")
} else if ((jogador === 1 && computador === 3) || (jogador === 2 && computador === 1) || (jogador === 3 && computador === 2)) {
    console.log("     Jogador venceu")
} else {
    console.log("    Computador venceu")
}
    

    novoJogo = prompt("Deseja jogar novamente?(s/n) ")
} while (novoJogo === "s" || novoJogo === "S")