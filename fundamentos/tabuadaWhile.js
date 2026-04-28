/**
 * Estudo do laço while - tabuada
 * @author Gustavo
 */

const prompt = require('prompt-sync')()

let tabuada, x = 0

console.clear()
console.log("Tabuada")

tabuada = Number(prompt("Digite a tabuada desejada: "))

while (x++ < 10) {
    console.log(`${tabuada} x ${x} = ${tabuada * x}`)
}
