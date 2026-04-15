/**
 * Criar um programa para calcular a porcentagem de um valor usando regra de 3
 * @author Gustavo
 */

const prompt = require(`prompt-sync`)()

let x, y, valor

console.clear()
console.log("Cálculo da porcentágem")

x = Number(prompt("Digite o valor: "))
y = Number(prompt("Digite a porcentágem: "))

valor = (x * y) / 100 

console.log(`${y}% de ${x} é: ${valor}`)