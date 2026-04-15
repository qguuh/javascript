/**
 * Cálculo da quantidade de latas de tinta
 * @author Gustavo
 */

const prompt = require('prompt-sync')()

let area, rendimento, total

console.clear()
rendimento = Number(prompt("Rendimento da lada (em m²): "))
area = Number(prompt("área da parede (em m²): "))


total = rendimento / area

console.log(`Você irá precisar de ${Math.ceil(total)} latas de tinta`)