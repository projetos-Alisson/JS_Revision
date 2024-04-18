
const funcionarios = [
    {
        nome: 'Pedro',
        idade: 30,
        cargo: 'Operador de Máquina',
        tempo_experiencia: 5,
        salario: 2000
    },

    {
        nome: 'João',
        idade: 40,
        cargo: 'Empilhador',
        tempo_experiencia: 10,
        salario: 2500
    },

    {
        nome: 'Kleber',
        idade: 32,
        cargo: 'Supervisor',
        tempo_experiencia: 4,
        salario: 2900
    }
]

console.table(funcionarios)

//Convertion to JSON
const jsonData = JSON.stringify(funcionarios);

console.log(jsonData)
//console.log(typeof(jsonData))


//Convertion object to JSON

const objData = JSON.parse(jsonData);

console.log(objData)
//console.log(typeof(objData))
//Testing converted object using JS methods
console.log("")
console.log("CARGOS")
console.log("")
objData.map((pessoa) => {
    console.log(pessoa.cargo)
})