/**
 * Cálculo do IMC
 * exemplo de encadeamento da estrutura if
 * @author Gustavo
 */

const prompt = require('prompt-sync')()

let peso, altura, imc

console.clear()
console.log("Cálculo do IMC")

peso = Number(prompt("Digite seu peso em Kg: "))
altura = Number(prompt("Digite a sua altura em metros: "))

imc = peso / (altura * altura)

//console.log(`IMC: ${imc.toFixed(2)}`)

console.clear()
console.log("---------------------------------")
if (imc < 18.5) {
    console.log(`seu IMC é: ${imc.toFixed(2)}, você está abaixo do peso`)
} else if (imc < 25) {
    console.log(`seu IMC é: ${imc.toFixed(2)}, você está no peso ideal`)
} else if (imc < 30) {
    console.log(`seu IMC é: ${imc.toFixed(2)}, você está acima do peso`)
} else if (imc < 35) {
    console.log(`seu IMC é: ${imc.toFixed(2)}, você está com Obesidade I`)
} else if (imc < 40) {
    console.log(`seu IMC é: ${imc.toFixed(2)}, você está com Obesidade II`)
} else {
    console.log(`seu IMC é: ${imc.toFixed(2)}, você está com Obesidade III`)
}