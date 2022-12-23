//Parâmetros de função

function soma(num1, num2) {
    return num1 + num2;
}

console.log(soma(1,3))

//Parâmetros X Argumentos

//Ordem dos parâmetros

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade("Rafaela", 23))

function multiplica(numero1, numero2) {
    return numero1 * numero2;
}

console.log(multiplica(soma(2,3), soma(3,3)))