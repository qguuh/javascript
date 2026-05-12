/**
 * Estruturas de dados - Array(Vetor)
 * @author Gustavo
 */

// A linha abaixo cria um Array (Vetor)
let alunos = ["Vitor", "tânia", "Pedro", "Maria", "Vivi", "Ana"]

console.clear()
console.log("===== ARRAY =====")

console.log(alunos)
console.log(`Um array é do tipo: ${typeof(alunos)}`)

// Obtendo o tamanho do array (Lenght)
console.log(`Tamanho do aray: ${alunos.length}`)

// Adicionando dados em um array (CRUD Create)

console.log("")
console.log("CRUD Create =====")
alunos.push("Jorge") // O método push() faz de forma segura um dado ao array
console.log(alunos)
console.log(`Tamanho do aray: ${alunos.length}`)

// Exibindo os dados de um array (CRUD Read)

console.log("")
console.log("CRUD Read =======")
console.log(alunos)
console.table(alunos)
console.log(`Aluno [2]: ${alunos[2]}`)

// Alterando dados de um array (CRUD Update)
//Usar o índice para alterar um dado do vetor

console.log("")
console.log("CRUD Update =====")
alunos[0] = "Victor"
alunos[4] = "Viviane"
console.table(alunos)

// Excluindo dados de um array (CRUD Delete)

console.log("")
console.log("CRUD Delete =====")
delete alunos[1] // Delete exclui de forma segura um dado do array
console.table(alunos)
console.log(`Tamanho do aray: ${alunos.length}`)

// Percorrendo um array
console.log("")
console.log("----------------------")
console.log("")
console.log("Percorrendo um array")

let notas = [3, 8, 5, 9, 2, 7]
console.log("")
console.log(notas)
console.table(notas)

// Percorrendo um array com uso do laço for

console.log("laço for")
for(let i = 0; i < notas.length; i++) {
    console.log(notas[i])
}

// Simplificação do laço for (for each)

console.log("")
console.log("Laço forEach")
notas.forEach((notas) => {
    console.log(notas)
})

// Manipulação e filtragem de dados de um array

console.log("")
console.log("----------------------")
console.log("")
console.log("Manipulação e filtragem de dados")
console.log("")

console.log("Exemplo 1: Adicionar 1 ponto as notas dos alunos")

let notasAtualizadas = notas.map((na) => {
    return na + 1
})
console.log("")
console.log(`Notas originais: ${notas}`)
console.log(`Notas Atualizadas: ${notasAtualizadas}`)

console.log("")

console.log("Exemplo 2: Conversão de um sistem de notas(Números) para letras(caracteres)")

/*
    NA - Não atendeu (notas < 5)
    PA - Parcialmente atendido (notas entre 5 e 7)
    A - Atendeu (nota > 7)
*/

let notasConvertidas = notas.map((nc) => {
    if (nc < 5) {
        return "NA"
    } else if (nc > 7) {
        return "A"
    } else {
        return "PA"
    } 
})

console.log("")
console.log(`Notas originais: ${notas}`)
console.log(`Notas Convertidas: ${notasConvertidas}`)

// Nova estrutura de dados
let alunosDC = [
    {
        nome: "Bruce",
        idade: 43,
        bolsista: false
    },
    {
        nome: "Clark",
        idade: 45,
        bolsista: false
    },
    {
        nome: "Diana",
        idade: 36,
        bolsista: false
    },
    {
        nome: "Barry",
        idade: 23,
        bolsista: true
    }
]

console.log("")
console.log("Estrutura de dados usando array")
console.log("")
console.log(alunosDC)
console.table(alunosDC)

// Filtros

console.log("")
console.log("Filtros: Exemplo 1: Alunos bolsistas")
console.log("")
console.log(alunosDC.filter((b) => {
    return b.bolsista === true
}))

console.log("")
console.log("Filtros: Exemplo 2: Alunos com idade superior a 40 anos")
console.log("")
console.log(alunosDC.filter((i) => {
    return i.idade > 40
}))

console.log("")
console.log("Filtros: Exemplo 3: Ordernar os alunos")
console.log("")
// Dica: Criar uma cópia do array original para não modificar o index ([...array] criar uma cópia)

let alunosOrdenados = [...alunosDC] // criar uma cópia
alunosOrdenados.sort((a, z) => {
    return (a.nome.localeCompare(z.nome))
})

console.table(alunosOrdenados)