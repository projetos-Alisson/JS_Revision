//Organiza membros de um grupo de Whatssap;
const ListPeoples = () => {
    let members =  [
        {ItsMe: true, adm: true, name: "Alisson"},

        {ItsMe: false, adm : true, name: "Keyle"},
        
        {ItsMe: false, adm: false, name: "Roberto" }
    ] 
    console.log(members)
}


//Organiza os membros do grupo, de modo ao adm ficar no topo


const organization = (memberList) => {
   
    //if "a" return a number <0, he will come first than b
    //if "b" return a number >0, he will come after the  a

    memberList.sort((a,b) => {
        if (a.ItsMe === true && b.ItsMe === false) {
            return -1;
        }
    })
    console.log(memberList)

    
}

ListPeoples()