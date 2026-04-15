/**
 * programa que calcule o valor da conta de luz de uma residência
 * @author Gustavo
 */

const prompt = require('prompt-sync')()

let tarifa, valor, total

console.clear()
valor = Number(prompt("Consumo total em KWh: "))
tarifa = Number(prompt("Valor da tarifa em KWh: "))

total = valor * tarifa

console.log(`Total a ser pago é de: R$${total}`)