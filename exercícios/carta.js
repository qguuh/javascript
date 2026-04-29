/**
 * Sorteio de uma carta
 * Exemplo de uso de array para simplificar o código
 * @author Gustavo
 */

const prompt = require('prompt-sync')()
const color = require('colors')

let nipes = ["♠", "♥", "♦", "♣"]
let faces = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"], novoJogo = "n"

do {
    console.clear()
    console.log("Sorteiro de uma carta de baralho")
    prompt ("Pressione [Enter] para lançar a carta... ")
    console.log("")

    let nipe = nipes[Math.floor(Math.random() * 4)]
    let face = faces[Math.floor(Math.random() * 13)]

    if (nipes.indexOf(nipe) === 1 || nipes.indexOf(nipe) === 2) {
        console.log(`${face}${nipe}`.red)
    } else {
        console.log(`${face}${nipe}`.black)
    }

    console.log("")
    novoJogo = prompt("Deseja jogar novamente?(s/n) ")
} while (novoJogo === "s" || novoJogo === "S")