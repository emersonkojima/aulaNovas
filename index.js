/*
Faça um programa que calcule e imprima o salario a ser transferido para um funcionario

Para realizar o calculo receba o valor bruto do salario e o adicional dos beneficios
O salario a ser transferido é calculado da seguinte maneira:

(valor bruto do salario = percentual de imposto mediante ao salario)+ adicional dos beneficios */

let salario = 2000.00
let valorAPagar = calculoCom5(salario)


function calculoCom5(x, y = 5){
    valorFinal = ((salario * y) / 100) + salario
    return(valorFinal)
} 

console.log(valorAPagar)






