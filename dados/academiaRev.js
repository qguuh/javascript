/**
 * Sistema para gestão de academia
 * Estudo de arrays como estrutura de dados
 * @author Gustavo
 * @version 1.0
 */



const prompt = require('prompt-sync')()
const color = require('colors')



let nome, idade, peso, altura, vip
let matricula = 1
let opcaoMenu, opcaoConsulta, opcaoRelatorio, busca

let alunos = []

function mainAcademia() {
    do {
        console.clear()
        console.log(" _____           _           _           __ _____".yellow)
        console.log("|  _  |___ ___ _| |___ _____|_|___    __|  |   __|".yellow)
        console.log("|     |  _| .'| . | -_|     | | .'|  |  |  |__   |".yellow)
        console.log("|__|__|___|__,|___|___|_|_|_|_|__,|  |_____|_____|".yellow)
        console.log("")
        console.log("1. Cadastrar aluno")
        console.log("2. Consultar alunos")
        console.log("3. Alterar aluno")
        console.log("4. Excluir aluno")
        console.log("5. Ficha do aluno")
        console.log("6. Relatórios")
        console.log("0. Sair")
        console.log("")
        opcaoMenu = Number(prompt("Escolha: "))

        switch (opcaoMenu) {
            case 1:
                cadastrarAluno()
                break;
            case 2:
                consultarAlunos()
                break;
            case 3:
                editarAluno()
                break;
            case 4:
                excluirAluno()
                break;
            case 5:
                gerarFichaAluno()
                break;
            case 6:
                gerarRelatorios()
                break;
            case 0:
                console.log("Encerrando o sistema...")
                break;
            default:
                console.log("Opção inválida!")
                prompt("Pressione [Enter] para voltar...");
        }
    } while (opcaoMenu !== 0);
}

function cadastrarAluno() {
    console.clear()
    console.log("=== CADASTRO DE ALUNO ===")
    console.log("")

    nome = prompt("Nome: ")
    idade = Number(prompt("Idade: "))
    //===============================================================================
    if (idade === "NaN") {
        console.log("Idade inválida, digite novamente. ".red)
    } else {
    //===============================================================================
    peso = Number(prompt("Peso: "))
    altura = Number(prompt("Altura: "))
    vip = prompt("Aluno é VIP? (s/n): ")
    if (vip === "s") {
        vip = true
    } else {
        vip = false
    }}

    alunos.push([
        matricula,
        nome,
        idade,
        peso,
        altura,
        vip
    ])

    matricula++

    console.log("")
    console.log("Aluno(a) cadastrado com sucesso".green)
    console.log("")

    prompt("Pressione [Enter] para voltar...")
}

function consultarAlunos() {
    do {
        console.clear()
        console.log("=== CONSULTA DE ALUNOS ===")
        console.log("")

        console.log("1. Buscar aluno")
        console.log("2. Listar alunos")
        console.log("0. Voltar")
        console.log("")
        opcaoConsulta = Number(prompt("Escolha: "))

        switch (opcaoConsulta) {
            case 1:
                buscarAluno()
                break;
            case 2:
                listarAlunos()
                break;

            case 0:
                break;
            default:
                console.log("Opção inválida!")
                prompt("Pressione [Enter] para voltar...");
                break;
        }

    } while (opcaoConsulta !== 0)

    function buscarAluno() {
        console.clear()
        console.log("=== BUSCAR ALUNO ===")
        console.log("")


        busca = prompt("Digite o nome do aluno: ").toLowerCase()

        encontrados = alunos.filter((a) => {
            return a[1].toLowerCase().includes(busca)
        })

        if (encontrados.length === 0) {
            console.log("")
            console.log("Aluno não encontrado ou não cadastrado.".red)
        } else {

            let cliente = encontrados
                .map((a) => {
                    return {
                        Matrícula: a[0],
                        Nome: a[1],
                        Idade: a[2],
                        Peso: a[3],
                        Altura: a[4],
                        VIP: a[5]
                    }
                })
            console.table(cliente)
        }
        console.log("")
        prompt("Precione [Enter] para voltar...");
    }

    function listarAlunos() {
        console.clear()
        console.log("=== LISTA DE ALUNOS ===")
        console.log("")

        if (alunos.length === 0) {
            console.log("Nenhum aluno cadastrado".red)
        } else {

            let alunosOrdenados = [...alunos]
            alunosOrdenados.sort((a, z) => {
                return (a[1].localeCompare(z.nome))
            })

            let listaAlunos = alunosOrdenados
                .map((a) => {
                    return {
                        Matrícula: a[0],
                        Nome: a[1],
                        Idade: a[2],
                        Peso: a[3],
                        Altura: a[4],
                        VIP: a[5]

                    }
                })
            console.table(listaAlunos)
        }
        console.log("")
        prompt("Pressione [Enter] para voltar...");
    }
}

function editarAluno() {
    console.clear()
    console.log("=== ALTERAR ALUNO ===")
    console.log("")
    console.clear()
    console.log("=== ALTERAR ALUNO ===")
    console.log("")

    let buscaMatricula = Number(prompt("Digite a matrícula do aluno: "))

    let indice = alunos.findIndex((a) => {
        return a[0] === buscaMatricula
    })

    console.log("")


    if (indice === -1) {
        console.log("Aluno não encontrado".red)
    } else {

        console.log("Dados atuais:")
        console.log("")

        console.log(`Nome: ${alunos[indice][1]}`)
        console.log(`Idade: ${alunos[indice][2]}`)
        console.log(`Peso: ${alunos[indice][3]}`)
        console.log(`Altura: ${alunos[indice][4]}`)
        console.log(`VIP: ${alunos[indice][5]}`)
        console.log("")

        let novoNome = prompt("Novo nome: ")
        let novaIdade = Number(prompt("Nova idade: "))
        let novoPeso = Number(prompt("Novo peso: "))
        let novaAltura = Number(prompt("Nova altura: "))

        let novoVip = prompt("Aluno VIP? (s/n): ")

        if (novoVip === "s") {
            novoVip = true
        } else {
            novoVip = false
        }

        alunos[indice][1] = novoNome
        alunos[indice][2] = novaIdade
        alunos[indice][3] = novoPeso
        alunos[indice][4] = novaAltura
        alunos[indice][5] = novoVip

        console.log("")
        console.log("Dados do aluno alterado com sucesso".green)
    }
    console.log("")
    prompt("Pressione [Enter] para voltar...")
}

function excluirAluno() {
    console.clear()
    console.log("=== EXCLUIR ALUNO ===")
    console.log("")
    let buscaMatricula = Number(prompt("Digite a matrícula do aluno: "))
    let indice = alunos.findIndex((a) => {
        return a[0] === buscaMatricula
    })

    console.log("")


    if (indice === -1) {

        console.log("Aluno não encontrado")

    } else {

        console.log("Aluno encontrado:")
        console.log("")
        console.log(`Matrícula: ${alunos[indice][0]}`.yellow)
        console.log(`Nome: ${alunos[indice][1]}`.yellow)
        console.log(`Idade: ${alunos[indice][2]}`.yellow)
        console.log(`Peso: ${alunos[indice][3]}`.yellow)
        console.log(`Altura: ${alunos[indice][4]}`.yellow)
        console.log(`VIP: ${alunos[indice][5]}`.yellow)
        console.log("")

        let confirmar = prompt("Confirmar exclusão? (s/n): ").toLowerCase()
        if (confirmar === "s") {
            alunos.splice(indice, 1)
            console.log("")
            console.log("Aluno excluído com sucesso!".green)
        } else {
            console.log("")
            console.log("Exclusão cancelada".yellow)
        }
    }

    console.log("")
    prompt("Pressione [Enter] para voltar...")
}

function gerarFichaAluno() {
    console.clear()
    console.log("=== FICHA DO ALUNO ===")
    console.log("")

    let buscarMatricula = Number(prompt("Digite a matrícula do aluno: "))

    let indice = alunos.findIndex((a => {
        return a[0] === buscarMatricula
    }))

    if (indice === -1) {
        console.log("Matrícula não encontrada".red)
    } else {
        nome = alunos[indice][1]
        idade = alunos[indice][2]
        peso = alunos[indice][3]
        altura = alunos[indice][4]
        vip = alunos[indice][5]

        let statusVip
        if (vip === true) {
            statusVip = "Sim (Direito a personal trainer)"
        } else {
            statusVip = "Não"
        }

        let fcm = (208 - (0.7 * idade)).toFixed(0)
        let agua = (peso * 35) / 1000
        let imc = (peso / (altura * altura))
        let pesoIdealMin = (18.5 * (altura / altura)).toFixed(1)
        let pesoIdealMax = (24.9 * (altura / altura)).toFixed(1)

        let statusImc
        if (imc < 18.5) {
            statusImc = "Abaixo do peso"
        } else if (imc < 25) {
            statusImc = "Peso normal"
        } else if (imc < 30) {
            statusImc = "Sobrepeso"
        } else if (imc < 35) {
            statusImc = "Obesidade Grau I"
        } else if (imc < 40) {
            statusImc = "Obesidade Grau II"
        } else {
            statusImc = "Obesidade grau III"
        }

        console.log("=============================================")
        console.log("=              FICHA DO ALUNO               =")
        console.log("=============================================")
        console.log(`Matrícula: ${buscarMatricula}`.yellow)
        console.log(`Nome: ${nome}`.yellow)
        console.log(`Idade: ${idade}`.yellow)
        console.log(`Altura: ${altura}`.yellow)
        console.log(`VIP: ${statusVip}`.yellow)
        console.log("")
        console.log(`FCM: ${fcm} bpm`.yellow)
        console.log(`Consumo de água recomendado: ${agua.toFixed(1)} litros/dia`.yellow)
        console.log(`ICM: ${imc.toFixed(2)}, ${statusImc}`.yellow)
        console.log(`Faixa de peso ideal: ${pesoIdealMin} Kg até ${pesoIdealMax} Kg`.yellow)
        console.log("=============================================")

    }

    console.log("")
    prompt("Precione [Enter] para voltar...");

}

function gerarRelatorios() {


    do {
        console.clear()
        console.log("=== RELATÓRIOS ===")
        console.log("")
        console.log("1. Alunos VIP")
        console.log("2. Média de idade")
        console.log("3. Percentual de IMC")
        console.log("0. Voltar")
        console.log("")
        opcaoRelatorio = Number(prompt("Escolha: "))

        switch (opcaoRelatorio) {
            case 1:
                gerarRelatorioVIP()
                break;
            case 2:
                gerarRelatorioMediaIdade()
                break;
            case 3:
                gerarRelatorioIMC()
                break;
            case 0:
                break;
            default:
                console.log("Opção inválida!")
                prompt("Pressione [Enter] para voltar...");
                break;
        }

    } while (opcaoRelatorio !== 0);
    function gerarRelatorioVIP() {
        console.clear()
        console.log("=== ALUNOS VIP ===")
        console.log("")


        let alunosVip = alunos.filter((a) => {
            return a[5] === true
        })

        if (alunosVip.length === 0) {
            console.log("Nenhum aluno VIP cadastrado".red)
        } else {
            let listaVip = alunosVip.map((a) => {
                return {
                    matricula: a[0],
                    nome: a[1]
                }
            })
            console.table(listaVip)
        }

        console.log("")
        prompt("Pressione [Enter] para voltar...")
    }
    function gerarRelatorioMediaIdade() {
        console.clear()
        console.log("=== MÉDIA DE IDADES ===")
        console.log("")

        if (alunos.length === 0) {
            console.log("Nenhum aluno cadastrado".red)
        } else {
            let somaIdades = 0
            alunos.forEach((a) => {
                somaIdades += a[2]
            })
            let media = somaIdades / alunos.length
            console.log(`Média de idade é de: ${media.toFixed(0)} anos`)
        }

        console.log("")
        prompt("Pressione [Enter] para voltar...".red)
    }

    function gerarRelatorioIMC() {
        console.clear()
        console.log("=== % IMC DOS ALUNOS ===")
        console.log("")

        if (alunos.length === 0) {
            console.log("Nenhum aluno cadastrado")
        } else {
            let abaixoPeso = 0
            let pesoNormal = 0
            let acimaPeso = 0

            alunos.map((a) => {
                let peso = a[3]
                let altura = a[4]
                let imc = peso / (altura * altura)
                if (imc < 18.5) {
                    abaixoPeso++
                } else if (imc < 25) {
                    pesoNormal++
                } else {
                    acimaPeso++
                }
            })

            let total = alunos.length
            let percAbaixo = ((abaixoPeso / total) * 100)
            let percNormal = ((pesoNormal / total) * 100)
            let percAcima = ((acimaPeso / total) * 100)
            let graficoAbaixo = "■".repeat(Math.round(percAbaixo / 2))
            let graficoNormal = "■".repeat(Math.round(percNormal / 2))
            let graficoAcima = "■".repeat(Math.round(percAcima / 2))

            console.log(`Abaixo do peso: ${percAbaixo.toFixed(1)}%`)
            console.log(graficoAbaixo)
            console.log("")

            console.log(`Peso normal: ${percNormal.toFixed(1)}%`)
            console.log(graficoNormal)
            console.log("")

            console.log(`Acima do peso: ${percAcima.toFixed(1)}%`)
            console.log(graficoAcima)
            console.log("")
        }

        console.log("")
        prompt("ENTER...")
    }
}

mainAcademia()