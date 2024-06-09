/*
01 

Apenas olhando o código abaixo (sem escrever código), você sabe qual valor 
cada let está armazenando após a execução do forEach?

Apenas pense em qual valor cada let armazenou. Você pode escrever um comentário 
temporário para ajudar a entender o fluxo. 

Só após concluir o raciocínio sobre os valores das lets, confira se os valores 
que você supôs estão corretos. Você pode usar console.log para visualizar os 
valores (após concluir seu raciocínio). 

O principal objetivo deste exercício é checar se você entendeu o fluxo de 
execuções da função do forEach.
*/

const fruits = ['maçã', 'banana', 'laranja']

let firstLet = 0
let secondLet = 3
let thirdLet = ''

fruits.forEach((fruit, index, array) => {
  const lastIndex = array.length - 1

  if (index === lastIndex) {
    thirdLet = fruit 
  }
  
  firstLet = firstLet + lastIndex  
  secondLet = secondLet * index  
})

/*FLUXO DE EXECUÇÕES DO forEach

  1° execução

  lastIndex: 2
  index === lastIndex: false
  firstLet = 2
  secondLet = 0

  2° execução

  lastIndex: 2
  index === lastIndex: false
  firstLet = 4
  secondLet = 0


  3° execução

  lastIndex: 2
  index === lastIndex: true
  thirdLet = 'laranja'
  firstLet = 6
  secondLet = 0










/* 02

02

Converta o for loop abaixo em um forEach.

O seu forEach deve ter a mesma funcionalidade do for. Isto é, ele deve 
preencher o array lettersInUppercase com a versão maiúscula das letras. 

Deve ficar assim: ['V', 'E', 'P']

Após converter, verifique se lettersInUppercase realmente está armazenando 
o valor que você deseja.




const letters = ['v', 'e', 'p']
const lettersInUppercase = []

for (let i = 0; i < letters.length; i++) {
  lettersInUppercase.push(letters[i].toUpperCase())
}

/* TENTATIVA DE RESOLVER
const lettersInUppercase = []

const letters = ['v', 'e', 'p']

letters.forEach(l => lettersInUppercase = l.letters )

console.log(lettersInUppercase)*/



/*
03

Declare um forEach logo abaixo da let paragraphs e acima da linha do 
section.innerHTML.

Após a execução do seu forEach, a let paragraphs deve conter uma string com 
a marcação HTML de 4 parágrafos (<p>). 

Cada parágrafo deve conter uma string do array reviews. 

Deve ficar assim: 
'<p>Eu sempre...</p><p>O primeiro...</p><p>Michael é...</p><p>Recomendo...</p>'

👆🏻 as reticências (...) acima são apenas uma representação do restante 
do parágrafo.
*/

const section = document.querySelector('[data-js="section"]')

const reviews = [
  'Eu sempre adorei o filme e quando descobri que tinha o livro também fiquei doido. Demorei um pouco mas acabei comprando e finalmente li \o/.',
  'O primeiro filme foi baseado nesse livro, porém o livro (como sempre) é muito mais completo, com mais personagens, mais acontecimentos e até mesmo mais dinossauros. Na verdade nesse livro tem coisas do segundo e terceiro filme também, eles mudaram bastante nos filmes, acho que pra ficar mais comercial, e se o filme é bom, o livro é 100 vezes melhor.',
  'Michael é um ótimo autor, esse sim pesquisa muito antes de escrever um livro, além da história que já prende sua atenção, ele fala bastante de genética (pra explicar como os dinossauros foram criados) e acaba falando um pouco de programação (informática), por causa dos programas avançados e modernos que o parque tinha. E isso foi uma das coisas que eu achei muito legal, ele explica as coisas com gráficos, tabelas, códigos ... enfim, o cara é foda hahaha.',
  'Recomendo esse livro pra quem curte uma boa história de ficção. Apesar de muita gente pensar que o livro não tem graça, porque o legal mesmo é ver o dinossauro no filme, com todos os efeitos especiais, eu digo pra deixar esse pensamento de lado, pois a história é tão bem contada e os detalhes são tão bem relatados, que você passa a fazer parte da história, e vive todas as emoções hahaha.'
]

let paragraphs = ''


reviews.forEach(c =>{ 
    console.log(paragraphs)
    
    paragraphs += `<p> ${c}</p> ` 
})

section.innerHTML = paragraphs





