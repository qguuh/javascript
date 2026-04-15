/**
 * 
 * @author Gustavo
 */

const prompt = require('prompt-sync')()

let distancia, litros, consumo
console.clear()

litros = Number(prompt("Insira a quantidade de litros consumido: "))
distancia = Number(prompt("Qual a distância percorrida: "))

consumo = distancia / litros

console.log(`O consumo total que vai ser usado é ${consumo}`)