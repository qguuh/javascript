/**
 * Estudo do laço for - tabuada
 * @author Gustavo
 */

const prompt = require('prompt-sync')()

let tabuada

console.clear()
console.log("Tabuada")

tabuada = Number(prompt("Digite a tabuada desejada: "))

for (let i = 1; i < 11; i++){
    console.log(`${tabuada} x ${i} = ${tabuada * i}`)
}
