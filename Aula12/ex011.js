var idade = 17;
if (idade < 16) {
    console.log ('Não vota')
} else{
    if (idade >=16 && idade < 18){ // PODERIA SER  if (idade < 18){
        console.log('Voto opcional')
} else{
    console.log('Voto obrigatório')
}

}

//VOTAÇÃO INCLUINDO IDOSOS

var idade = 70;
if (idade < 16) {
    console.log ('Não vota')
} else{
    if (idade < 18 || idade > 70){ // PODERIA SER  if (idade < 18){
        console.log('Voto opcional')
} else{
    console.log('Voto obrigatório')
}

}