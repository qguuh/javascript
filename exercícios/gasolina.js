/**
 * Cálculo para saber qual combustível é mais viavel para abastecer o carro
 * @author Gustavo
 */

const color = require('colors')
const prompt = require("prompt-sync")()

let alcool, gasolina

console.clear()
console.log("Cálcular para saber qual combustível comprar")
console.log("")

alcool = Number(prompt("Valor do álcool: "))
gasolina = Number(prompt("Valor da gasolina: "))

console.clear()
console.log("----------------------")
if (alcool < 0.7 * gasolina) {
    console.log("Abasteça com álcool".green)
} else {
    console.log("Abasteça com gasolina".red)
}