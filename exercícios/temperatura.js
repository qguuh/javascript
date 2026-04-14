/**
 * Exercicio - Conversão de temperatura
 * @author Gustavo
 */

const prompt = require('prompt-sync')()

let c, f

console.clear()
console.log("Conversão de temperatura Fahrenheit -> Celsius")

f = Number(prompt("Digite a temperatura em Fahrenheit: "))

c = (f - 32) * 5/9

console.log(`${f}° F equivalem a ${c.toFixed(1)}° C `)