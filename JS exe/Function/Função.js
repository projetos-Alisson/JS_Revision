//Mostra a situação de um jogador

let player
function SituationShow(vida,poder){
    player =  "Você têm " + vida + " pontos de vida e " + poder + " de poder.";

    if( poder <= 35){
        console.log("Você está ficando fraco!")
        console.log(player)
    }else{
        console.log(player)
    }
}

SituationShow(3,45)
