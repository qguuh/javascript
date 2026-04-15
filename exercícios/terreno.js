/**
 * programa que calcule a área de um terreno retangular
 * @author Gustavo
 */

const prompt = require('prompt-sync')()

let comprimento, largura, area

console.clear()
comprimento = Number(prompt("Comprimento do terreno: "))
largura = Number(prompt("Largura do terreno: "))

area = comprimento * largura

console.log(`A área do terreno é de: ${area} metros`)

