/**
 * Conversão de Real para Dolar
 * @author Gustavo
 */

const prompt = require('prompt-sync')()

let real, dolar, cambio

console.clear()
console.log("Conversão de Real para Dolar")
console.log("")

real = Number(prompt("Qual a quantidade que você deseja converter? "))
cambio = Number(prompt("Qual o valor da cotação atual? "))

dolar = real / cambio

console.clear()
console.log(`----------------------------------------------------------------------`)
console.log(`o valor de ${real} reais convertendo em dolares fica ${dolar} dolares.`)