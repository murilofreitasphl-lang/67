let peso = 64;
let altura = 1.65;



function calcularIMC(peso, altura) {
    Imc = peso / (altura * altura)
}

function classificarIMC (Imc) {
    if (Imc <= 18.5) {
        Classificacao = "Magro"
} 
    else if (Imc <= 24.9) {
        Classificacao = "Normal"
    }
    else if (Imc <= 29.9) {
        Classificacao = "Sobrepeso"
    }
    else if (Imc <= 34.9) {
        Classificacao = "Obesidade 1"
    }
    else if (Imc <= 39.9) {
        Classificacao = "Obesidade 2"
    }
    else if (Imc > 40 ) {
        Classificacao = "Obesidade 3"
    }
}

calcularIMC(peso,altura)
classificarIMC(Imc)
console.log(`Seu Imc é de ${Imc} , você está ${Classificacao}`)

let n1 = 60
let n2 = 16

let resultadosomar = somar(n1, n2)

function somar(n1, n2){
    return n1 + n2
}

console.log(resultadosomar)

let n3 = 22
let n4 = 13

let resultadosubtrair = subtrair(n3, n4)

function subtrair(n3, n4){
    return n3 - n4
}

console.log(resultadosubtrair)

let n5 = 67
let n6 = 42

let resultadomultiplicar = multiplicar(n5, n6)

function multiplicar(n5, n6){
    return n5 * n6
}

console.log(resultadomultiplicar)

let n7 = 24
let n8 = 34

let resultadodividir = dividir(n3, n4)

function dividir(n7, n8){
    return n7 / n8
}

console.log(resultadodividir)

let n9 = 5
let n10 = 5

let resultadoPot = elevar(n9, n10)

function elevar(n9, n10){
    return n9 ** n10
}
console.log(resultadoPot)
