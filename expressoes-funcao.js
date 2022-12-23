// Declaração de Função
function minhaFuncao(param) {
    //Bloco de Código
}

minhaFuncao("param")

//Expressão de função

// console.log(soma(1,1))

//Diferença Principal: HOSTING -> Funções e var são "listadas" no topo do arquivo

console.log(apresentar())

function apresentar(){
    return "olá"
}

const soma = function(num1, num2) {return num1 + num2}
console.log(soma(1,1))