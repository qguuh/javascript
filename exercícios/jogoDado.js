/**
 * Jogo do dado
 * Exemplo de uso da estrutura do while
 * @author Gustavo
 */

const prompt = require('prompt-sync')()
let novoJogo = "n"

do {
    console.clear()
    console.log("Jogo do dado")
    prompt ("Pressione [Enter] para lançar o dado...")
    console.log(`face do dado: ${Math.ceil(Math.random() * 6)} `)
    novoJogo = prompt("Deseja jogar novamente?(s/n) ")
} while (novoJogo === "s" || novoJogo === "S")
