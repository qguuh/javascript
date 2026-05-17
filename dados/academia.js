/**
 * Sistema para gestão de academia
 * Estudo de array com estrutura de dados
 * @author Gustavo
 */

// Importação de pacotes

const prompt = require('prompt-sync')()
const color = require('colors')

// Variáveis globais

let nome, idade, peso, altura, vip
let matricula = 1 // contador de matricula
let opcaoMenu, opcaoConsulta, opcaoRelatorio, busca

// array principal (estrutura de dados)

let alunos = []

/*
    Estrutura de dados
    [0] matricula
    [1] nome
    [2] idade
    [3] peso
    [4] altura
    [5] vip
*/

// Main >>>>>>>>>>>>>>>>>>>>>

function atualizarIdades() {
    let anoAtual = new Date().getFullYear()

    alunos.forEach((a) => {
        let idadeSalva = a[2]
        let anoCadastro = a[6] // nova posição no array

        if (anoCadastro) {
            let anosPassados = anoAtual - anoCadastro
            a[2] = idadeSalva + anosPassados
            a[6] = anoAtual // atualiza o ano base
        }
    })
}


function mainAcademia() {
    //Menu principal
    do {
        atualizarIdades()
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
                console.log("")
                console.log("Obrigado por usar o sistema da academia!".green)
                console.log("Encerrando o sistema...".yellow)
                console.log("")
                break;
            default:
                console.log("Opção inválida!")
                prompt("Pressione [Enter] para voltar...");
        }
    } while (opcaoMenu !== 0);
}

// Main (Fim) <<<<<<<<<<<<<<<


// CRUD - Create >>>>>>>>>>>>

function cadastrarAluno() {
    console.clear()
    console.log("=== CADASTRO DE ALUNO ===")
    console.log("")

    nome = prompt("Nome: ")
    do {
        idade = Number(prompt("Idade: "))
        if (isNaN(idade) || idade <= 0) {
        console.log("Idade inválida! Digite apenas números.".red)
        }
    } while (isNaN(idade) || idade <= 0)
    peso = Number(prompt("Peso: "))
    altura = Number(prompt("Altura: "))
    vip = prompt("Aluno é VIP? (s/n): ")
    if (vip === "s") {
        vip = true
    } else {
        vip = false
    }

    // Adicionar os dados na matriz

    let anoAtual = new Date().getFullYear()

    alunos.push([
        matricula, 
        nome, 
        idade, 
        peso, 
        altura, 
        vip,
        anoAtual
    ])

    matricula++ // Auto incremento da matrícula

    console.log("")
    console.log("Aluno(a) cadastrado com sucesso".green)
    console.log("")

    prompt("Pressione [Enter] para voltar...")
}

// CRUD - Create (Fim ) <<<<<


// CRUD - Read >>>>>>>>>>>>>>

function consultarAlunos() {
    // sub menu

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

        // buscar aluno
        function buscarAluno() {
            console.clear()
            console.log("=== BUSCAR ALUNO ===")
            console.log("")

        // Lógica principal
        busca = prompt("Digite o nome do aluno: ").toLowerCase() // .toLowerCase -> converter tudo em letras minúsculas

        //pesquisa (filtro) na estrutura de dados

        encontrados = alunos.filter((a) => {
            return a[1].toLowerCase().includes(busca)
        })

        // Validação
        if (encontrados.length === 0) {
            console.log("")
            console.log("Aluno não encontrado ou não cadastrado.".red)
        } else {
            // Encontrar um usuário no banco de dados

                let cliente = encontrados
                    .map((a) => {
                        return {
                            Matrícula: a[0],
                            Nome: a[1],
                            Idade: a[2],
                            Peso: a[3],
                            Altura: a[4],
                            VIP: a[5]
                        
                }})
                console.table(cliente)
        }
            console.log("")
            prompt("Precione [Enter] para voltar...");
        }

        // listar alunos
        function listarAlunos() {
            console.clear()
            console.log("=== LISTA DE ALUNOS ===")
            console.log("")
            
            // Validação
            if (alunos.length === 0) {
                console.log("Nenhum aluno cadastrado".red)
            } else {
                //console.table(alunos)
                // ordenar os nomes (criar cópia do array)

                let alunosOrdenados = [...alunos]
                alunosOrdenados.sort((a, z) => {
                return (a[1].localeCompare(z.nome))
                })
                //console.table(alunosOrdenados)

                // Criando um cabeçalho para tabela

                let listaAlunos = alunosOrdenados
                    .map((a) => {
                        return {
                            Matrícula: a[0],
                            Nome: a[1],
                            Idade: a[2],
                            Peso: a[3],
                            Altura: a[4],
                            VIP: a[5]
                        
                }})
                console.table(listaAlunos)
            }
            console.log("")
            prompt("Pressione [Enter] para voltar...");
        }
}

// CRUD - Read (Fim ) <<<<<<<


// CRUD - Update >>>>>>>>>>>>

function editarAluno() {
    console.clear()
    console.log("=== ALTERAR ALUNO ===")
    console.log("")
    console.clear()
    console.log("=== ALTERAR ALUNO ===")
    console.log("")

    let buscaMatricula = Number(prompt("Digite a matrícula do aluno: "))

    //buscar índice do aluno
    let indice = alunos.findIndex((a) => {
        return a[0] === buscaMatricula
    })

    console.log("")

    //validar busca
    if (indice === -1) {
        console.log("Aluno não encontrado".red)
    } else {
        //dados atuais
        console.log("Dados atuais:")
        console.log("")

        console.log(`Nome: ${alunos[indice][1]}`.yellow)
        console.log(`Idade: ${alunos[indice][2]}`.yellow)
        console.log(`Peso: ${alunos[indice][3]}`.yellow)
        console.log(`Altura: ${alunos[indice][4]}`.yellow)
        console.log(`VIP: ${alunos[indice][5]}`.yellow)
        console.log("")

        //novos dados
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

        //alteração
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

// CRUD - Update (Fim ) <<<<<



// CRUD - Delete >>>>>>>>>>>>

function excluirAluno() {
    console.clear()
    console.log("=== EXCLUIR ALUNO ===")
    console.log("")
    let buscaMatricula = Number(prompt("Digite a matrícula do aluno: "))

    //buscar índice do aluno
    let indice = alunos.findIndex((a) => {
        return a[0] === buscaMatricula
    })

    console.log("")

    //validar busca
    if (indice === -1) {

        console.log("Aluno não encontrado")

    } else {

        //dados do aluno
        console.log("Aluno encontrado:")
        console.log("")

        console.log(`Matrícula: ${alunos[indice][0]}`.yellow)
        console.log(`Nome: ${alunos[indice][1]}`.yellow)
        console.log(`Idade: ${alunos[indice][2]}`.yellow)
        console.log(`Peso: ${alunos[indice][3]}`.yellow)
        console.log(`Altura: ${alunos[indice][4]}`.yellow)
        console.log(`VIP: ${alunos[indice][5]}`.yellow)
        console.log("")

        //confirmação
        let confirmar = prompt("Confirmar exclusão? (s/n): ").toLowerCase()
        if (confirmar === "s") {
            //excluir aluno
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

// CRUD - Delete (Fim ) <<<<<


// ficha do aluno >>>>>>>>>>>

function gerarFichaAluno() {
    console.clear()
    console.log("=== FICHA DO ALUNO ===")
    console.log("")

    let buscarMatricula = Number(prompt("Digite a matrícula do aluno: "))

    // Lógica principal (buscar o index da estrutura de dados)

    let indice = alunos.findIndex((a => {
        return a[0] === buscarMatricula
    }))

    // Validação da busca (Pelo index do aluno) -1 = vázio
    if (indice === -1) {
        console.log("Matrícula não encontrada".red)
    } else {
        nome = alunos[indice][1]
        idade = alunos[indice][2]
        peso = alunos[indice][3]
        altura = alunos[indice][4]
        vip = alunos[indice][5]

        // status VIP
        
        let statusVip
        if (vip === true) {
            statusVip = "Sim (Direito a personal trainer)"
        } else {
            statusVip = "Não"
        }

        // Cálculos

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

        // Exibição

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

// Ficha do aluno (Fim) <<<<<


// Relatórios >>>>>>>>>>>>>>>

function gerarRelatorios() {
    //sub menu
    
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

    // Relatório de alunos VIP 
    function gerarRelatorioVIP() {
        console.clear()
        console.log("=== ALUNOS VIP ===")
        console.log("")

        // Lógica principal                    
        let alunosVip = alunos.filter((a) => { 
            return a[5] === true
        })

        // Validação
        if (alunosVip.length === 0) {
            console.log("Nenhum aluno VIP cadastrado".red)
        } else {
            let listaVip = alunosVip.map((a) => { // ┓
                return {                          // ┃
                    matricula: a[0],              // ┠ --> map "Cabeçalho da tabela de alunos VIP"
                    nome: a[1]                    // ┃
                }                                 // ┛
            })
            console.table(listaVip)
        }

        console.log("")
        prompt("Pressione [Enter] para voltar...")
    }

    //Relatório média de idade dos alunos
        function gerarRelatorioMediaIdade() {
        console.clear()
        console.log("=== MÉDIA DE IDADES ===")
        console.log("")

        // Lógica principal
        // Validação
        if (alunos.length === 0) {
            console.log("Nenhum aluno cadastrado".red)
        } else {
            let somaIdades = 0       // ┓
            alunos.forEach((a) => {  // ┠-->  Laço de repetição
                somaIdades += a[2]   // ┛
            })           
            let media = somaIdades / alunos.length
            console.log(`Média de idade é de: ${media.toFixed(0)} anos`.yellow)
        }

        console.log("")
        prompt("Pressione [Enter] para voltar...")
    }

        //Relatório de percentual de IMC
        function gerarRelatorioIMC() {
        console.clear()
        console.log("=== % IMC DOS ALUNOS ===")
        console.log("")
         
        //lógica principal (map() obter %imc da estrutura de dados )
        //validação

        //se nenhum aluno cadastrado
        if (alunos.length === 0) {
            console.log("Nenhum aluno cadastrado".red)
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

            //cálculos
            let total = alunos.length
            let percAbaixo = ((abaixoPeso / total) * 100)
            let percNormal = ((pesoNormal / total) * 100)
            let percAcima = ((acimaPeso / total) * 100)
            //mini gráfico
            let graficoAbaixo = "■".repeat(Math.round(percAbaixo / 2)).blue
            let graficoNormal = "■".repeat(Math.round(percNormal / 2)).blue
            let graficoAcima = "■".repeat(Math.round(percAcima / 2)).blue

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


// Relatórios (Fim) <<<<<<<<<


//iniciar o sistema
mainAcademia()