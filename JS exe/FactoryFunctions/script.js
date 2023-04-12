const celular = {
    marcaCelular: "Samsung",
    tamanhoTela: {
            altura: 155,
            horizontal: 75
    },
    capacidadeBateria: 5000,
    ligar: function() {
        console.log("Fazendo ligação....")
    }
}

//Factory Functions - "Encapsula" as informações em um MÉTODO

//Usando um Factoru Function

criarCelular = (marcaCelular,tamanhoTela,capacidadeBateria) => {
    return{
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar() {
            console.log("Fazendo Ligação...")
        }
    }
}

const celular1 = criarCelular("Xiomi",5.5,5000);
console.log(celular1);