function search(letter, palavra){
    var contLetter = 0;
    for(var i in palavra){
      
      if(letter == palavra[i]){
        contLetter++
      }

    }
    console.log("Essa letra apareceu", contLetter, (contLetter == 1? "vez" : "vezes"))
}

search("i", "liquidificador")




// function search(letter, palavra){
//   var contLetter = 0;
//     for(var i in palavra){
      
//       if(letter == palavra[i]){
//         contLetter++
//       }

//     }

//     if(contLetter > 1){
//      console.log("Essa letra apareceu aparece", contLetter, "vezes")
//     }

//     else if(contLetter === 1){
//       console.log("Essa letra apareceu aparece", contLetter, "vez")
     
//     }else{
//        console.log("Essa letra não está contida na palavra")
//     }
   

// }

// search("i", "liquidificador")