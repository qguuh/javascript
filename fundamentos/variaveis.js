/**
 * Estudo das Variáveis
 * @author Gustavo
 */

console.clear()
console.log("Estudo das variáveis")
console.log("")
console.log("Variável do tipo String")
// a linha abaixo cria uma variável
let nome = "Gustavo"
console.log(nome)
// a linha abaixo mostra o tipo de variável
console.log(typeof(nome))
console.log("")

console.log("Variável tipo number")
let idade = 57
// Não necessário as linhas abaixo caso crie uma ficha
console.log(idade)
console.log(typeof(idade))
console.log("")

let peso = 70
// Não necessário as linhas abaixo caso crie uma ficha
console.log(peso)
console.log(typeof(peso))
console.log("")

let altura = 1.73
// Não necessário as linhas abaixo caso crie uma ficha
console.log(altura)
console.log(typeof(altura))
console.log("")

console.log("Variável do tipo boolean")
let vip = true
console.log(vip)
console.log(typeof(vip))

console.log("")
console.log("------------------------------")
console.log("-       Ficha do aluno       -")
console.log("------------------------------")
// a linha abaixo concatena (união) um texto com um conteúdo da variável
console.log(`Nome: ${nome}`)
console.log(`Idade: ${idade} anos`)
console.log(`Peso: ${peso}kg`)
console.log(`Altura: ${altura}`)
console.log(`VIP: ${vip}`)
console.log("------------------------------")