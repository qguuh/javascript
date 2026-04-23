/**
 * 
 */

const prompt = require('prompt-sync')()

let idade

console.clear()
console.log("Validação da obrigatoriedade de votar")

//entrada
idade = Number(prompt("Digite sua idade: "))

//processamento e saída
if (idade < 16) {
    console.log("Proibido votar")
} else if (idade === 16 || idade === 17 || idade > 70) {
    console.log("Voto facultativo")
} else {
    console.log("Obrigado votar")
}