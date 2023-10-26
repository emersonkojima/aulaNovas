/*
Faça um programa que calcule e imprima o salario a ser transferido para um funcionario

Para realizar o calculo receba o valor bruto do salario e o adicional dos beneficios
O salario a ser transferido é calculado da seguinte maneira:

(valor bruto do salario = percentual de imposto mediante ao salario)+ adicional dos beneficios */

let salario = 1100.00


function calculo(x, y){
    valorFinal = ((salario * y) / 100) + salario
    return(valorFinal)
}

//Maior que R$ 2500 = 15.00%
if(salario >= 2500)
    console.log(calculo(salario, 15))
   
//1100.01 A R$ 2500.00 = 10.00%
else if(salario >= 1100.01 && salario <= 2500.00)
    console.log(calculo(salario, 10))

else
    console.log(calculo(salario, 5))







