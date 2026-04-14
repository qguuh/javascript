/**
 * Cálculo da média de 2 notas
 * Exemplo de uso da biblioteca prompt-sync
 * @author Gustavo
 */

// importar pacote
const prompt = require('prompt-sync')()

// Variáveis
let disciplina, nota1, nota2, media

console.clear()
console.log("Cálculo da média de 2 notas")


// Entrada de dados
disciplina = prompt("Digite o nome da disciplina: ")
console.log(disciplina)
//console.log(typeof(disciplina))

// Number(): converte para o tipo numérico
nota1 = Number(prompt("Digite a nota 1: "))
//console.log(nota1)
//console.log(typeof(nota1))

nota2 = Number(prompt("Digite a nota 2: "))
//console.log(nota2)
//console.log(typeof(nota2))

// Processamento
media = (nota1 + nota2) / 2

// Saida
console.log(`Média: ${media.toFixed(1)}`)

