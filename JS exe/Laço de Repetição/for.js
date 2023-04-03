//O FOR é usado quando precisa executar um mesmo código, um número de vezes específico


//Exemplos:

// //IMPRESÃO DE 0 À 10

// for(var i = 1; i <= 10; i++){
//     console.log(i)
// }

//IMPRESSÃO DE NÚMEROS IMPARES MENORES QUE 100

// for(var cont = 1; cont <= 100; cont+=2){
//     console.log(cont)
// }

// PRINT THE NUMBER EIGHT TABLES

// for(var i = 1; i <=10; i++){
//     var tab = "8*" +i+ "=" + 8*i;
//     console.log(tab)
// }

//PRINT THE SUM OF ALL NUMBERS FROM 0 TO 10 

// var soma = 0

// for (var i =1; i<=10; i++){
//     soma += i

    
// }
// console.log(soma)



//GUARDA ROUPA

const Bolsa = [
    'Pente',
    'Estojo',
    'Caderno',
    'Garrafa de água',
    'Livro'
]

for(let i = 0; i < Bolsa.length; i++){
    console.log(`${i+1} ==> ${Bolsa[i]}`)
    
    //Também é possível usar o break no for para interromper
    if(Bolsa[i] == 'Caderno') break //Ao encontrar o caderno, a execucão é interrompida

}