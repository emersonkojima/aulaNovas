/*
Faça um programa que calcule e imprima o salario a ser transferido para um funcionario

Para realizar o calculo receba o valor bruto do salario e o adicional dos beneficios
O salario a ser transferido é calculado da seguinte maneira:

(valor bruto do salario = percentual de imposto mediante ao salario)+ adicional dos beneficios */

let salario = 2000.00
let valorAPagar = soma(salario, porcentagem)

function soma(x, y){
    valorFinal = x + y
    return(valorFinal)
}

console.log(valorAPagar)

//if(salario >= 1100.01 && salario <= 2500.00)
  //  porcentagem = 10
    //console.log("mensagem" + soma(salario + porcentagem))




