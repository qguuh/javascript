/**
 * Estudo das funções
 * @author Gustavo
 */

// funcão literal (simples)

function hello () {
    console.clear()
    console.log("Hello function")   
    console.log("Tipo: " + typeof(hello)) //apoio ao entendimento da lógica
}

// Para executar uma função basta "chamar" o nome da função, não esquecendo dos parênteses
hello()

console.log("--------------------------------")
// Fução anônima >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const hello2 = function () {
    console.log("Hello function assigned")
    console.log("Tipo: " + typeof(hello2)) //apoio ao entendimento da lógica
}

hello2()

console.log("--------------------------------")
// Fução anônima simplificada >>>>>>>>>>>>>>>>>

const hello3 = () => {
    console.log("Hello Arrow function assigned")
    console.log("Tipo: " + typeof(hello3)) //apoio ao entendimento da lógica
}

hello3()

console.log("--------------------------------")
// Fução simples com parâmetros >>>>>>>>>>>>>>>

function somar(num1, num2) {
    console.log("Tipo: " + typeof(somar)) //apoio ao entendimento da lógica
    return (console.log(num1 + num2))
    
}

//neste caso dentro de parênteses, fornecemos os números que serão somados na função
somar(2, 3)

console.log("--------------------------------")
// Fução anônima com parâmetros >>>>>>>>>>>>>>>

const somarA = function(num1, num2) {
    console.log("Tipo: " + typeof(somarA))
    return(console.log(num1 + num2))
}

somarA(6, 7)

console.log("--------------------------------")
// Fução anônima simplificada com parâmetros >>

const somarAF = (num1, num2) => {
        console.log("Tipo: " + typeof(somarAF))
    return(console.log(num1 + num2))
}

somarAF(8, 8)

console.log("--------------------------------")
// Fução anônima super simplificada com parâmetros >>

// CUIDADO! Neste caso o retono é implicito
const somarAFS = (num1, num2) => (console.log(num1 + num2))

somarAFS(2, 7)