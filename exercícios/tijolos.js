/**
 * Cálculo para saber a quantidade de tijolos para usar em uma parede
 * @author Gustavo
 */

const prompt = require('prompt-sync')()

console.clear()
console.log("Calculo de tijolos para uma parede")
console.log("")

let altura, largura, total

altura = Number(prompt("Altura da parede: "))
largura = Number(prompt("Qual a largura da parede: "))
console.log("")

total = (altura * largura) / 0.02

console.clear()
console.log(`----------------------------------------------------`)
console.log(`O total de tijolos a ser usado é de ${total} tijolos`)