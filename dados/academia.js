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
let opcaoMenu, opcaoConsulta, opcaoRelatorio

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

function mainAcademia() {
    //Menu principal
    do {
        console.clear()
        console.log(" _____           _           _           __ _____")
        console.log("|  _  |___ ___ _| |___ _____|_|___    __|  |   __|")
        console.log("|     |  _| .'| . | -_|     | | .'|  |  |  |__   |")
        console.log("|__|__|___|__,|___|___|_|_|_|_|__,|  |_____|_____|")
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
                console.clear()
                console.log("Encerrando o sistema...")
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
    idade = Number(prompt("Idade: "))
    peso = Number(prompt("Peso: "))
    altura = Number(prompt("Altura: "))
    vip = prompt("Aluno é VIP? (s/n): ")
    if (vip === "s") {
        vip = true
    } else {
        vip = false
    }

    // Adicionar os dados na matriz

    alunos.push([
        matricula, 
        nome, 
        idade, 
        peso, 
        altura, 
        vip
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

    prompt("Pressione [Enter] para voltar...")
}

// CRUD - Update (Fim ) <<<<<



// CRUD - Delete >>>>>>>>>>>>

function excluirAluno() {
    console.clear()
    console.log("=== EXCLUIR ALUNO ===")
    console.log("")

    prompt("Pressione [Enter] para voltar...")
}

// CRUD - Delete (Fim ) <<<<<


// ficha do aluno >>>>>>>>>>>

function gerarFichaAluno() {
    console.clear()
    console.log("=== FICHA DO ALUNO ===")
    console.log("")

    prompt("Pressione [Enter] para voltar...")
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

        prompt("Pressione [Enter] para voltar...")
    }

    //Relatório média de idade dos alunos
        function gerarRelatorioMediaIdade() {
        console.clear()
        console.log("=== MÉDIA DE IDADES ===")

        console.log("")

        prompt("Pressione [Enter] para voltar...")
    }

        //Relatório de percentual de IMC
        function gerarRelatorioIMC() {
        console.clear()
        console.log("=== % IMC DOS ALUNOS ===")

        console.log("")

        prompt("Pressione [Enter] para voltar...")
    }
}


// Relatórios (Fim) <<<<<<<<<


//iniciar o sistema
mainAcademia()