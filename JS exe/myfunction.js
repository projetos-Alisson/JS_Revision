// function sum(num1, num2){
//     console.log("Valor dentro do escopo da função: ")
//     console.log(num1 + num2)
//     console.log("*****************************")
// }
// sum(5, 2)

// const num1 = 10
// console.log("Valor fora do escopo da função: ")
// console.log(num1)



//NaN - Not a Number
//sum()

//OBS: o QUE É CRIADO DENTRO DA FUNÇÃO NÃO PODE SER ACESSADO FORA, 
//PORÉM, O QUE É CRIADO FORA PODE SER ACESSADO DENTRO DA FUNÇÃO

const idadeLucas = 10
const idadeAlisson = 17

function sum(n1, n2){
    console.log(n1 + n2)
    console.log("=========")

    
}

//EXPLICAÇÃO:
//como as variaveis fazem referência à mesma função, então foi atribuido aos parâmetros n1 e n2, os seus valores

sum(idadeLucas, idadeAlisson)//É o mesmo que: sum(10, 17)


//POR QUE USAR PARÂMETROS?

//Para não precisar ficar repetido os mesmos trechos de código. 

//Imagine que eu queira calcular a soma de mais duas idades:
const idadeFulano = 12
const idadeSiclano = 8

function soma(){
    console.log("FUNÇÃO SEM PARÂMETROS: ")
    console.log(idadeAlisson + idadeLucas)
    console.log(idadeAlisson + idadeSiclano)
}

soma()

//CONCLUSÃO:

//Embora o resultado esteja correto, foi preciso copiar e colar duas vezes console.log
//além de precisar colar 4 vezes as variáveis para serem acessadas dentro da função

//Isso acaba sendo improdutivo, e seria mais fácil criar dois parâmetros dentro da função
// e invocar a função, no lado de fora com os as variáveis, pois os parâmetros serão atribuídos com
//os valores das variáveis que estão fora

//FICARIA ASSIM:

function soma2(p1, p2, p3, p4){
    console.log("COM PARÂMETROS: ")
    console.log(p1+p2) 
    console.log(p3+ p4)
    
}

//17,10,12,8
soma2(idadeAlisson, idadeLucas, idadeFulano, idadeSiclano)