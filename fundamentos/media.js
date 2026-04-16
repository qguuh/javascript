/**
 * Estudo da estrutura de controle if else
 * Cálculo da média
 * @author Gustavo
 */

const color = require('colors')
const prompt = require('prompt-sync')()

let nota1, nota2, media

console.clear()
console.log("Cálculo da média")
console.log("")

nota1 = Number(prompt("Qual a nota 1: "))
nota2 = Number(prompt("Qual a nota 2: "))

media = (nota1 + nota2) / 2

console.clear()
console.log(`----------------------------`)
console.log(`Média: ${media.toFixed(1)}`)

//  uso da estrutura if else para determinar se o aluno está aprovaddo ou reprovado

if (media < 5) {
    console.log(`Sua média é de ${media}, Você está reprovado.`.red)
} else {
    console.log(`Sua média é de ${media}, Você está aprovado.`.green)
}

