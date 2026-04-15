/**
 * Crie um programa que calcule a área de um triângulo
 * @author Gustavo
 */

const prompt = require('prompt-sync')()

let base, altura, area

console.clear()

console.log("Cálculo de área do triângulo")
console.log("")

base = Number(prompt("Base do triângulo:"))
altura = Number(prompt("Altura do triângulo:"))
console.log("")

area = base * altura

console.log (`A área do triângulo é ${area}`)