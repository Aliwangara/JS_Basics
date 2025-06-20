let move = ["rock", "paper", "Scissors"];
let randomMove = Math.floor(Math.random()*10)

function getMove(){
    if (  randomMove <= 3 ){
        return move[0]
    }else if(randomMove <= 6){
        return move[1]
    }else{
        return move[2]
    }



}

console.log(getMove())