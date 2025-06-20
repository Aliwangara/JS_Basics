
let player = {
    name : "Ali Wangara" ,
    chips: 25,



}




let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let sumEl = document.getElementById('sum-el');
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips



let messageEl = document.getElementById('message-el');

let cardsEl = document.querySelector("#cards-el")

// 1. Create a function, getRandomCard(), that always returns the number 5

function getRandomCard(){
    
    let randomNumber = Math.floor(Math.random()*13)+1 

   
    
    if ( randomNumber > 10){
        return 10

    } else if (randomNumber === 1){
        return 11
    }else{
        return randomNumber
    }
    



}


function startGame(){
  renderGame()
  console.log(renderGame)


}

function renderGame(){

    cardsEl.textContent = 'Cards:' ;

    // Create a for loop that renders out all the cards instead of just two

    for (let i = 0; i < cards.length ; i++){
        cardsEl.textContent += cards[i] + ' ';

        
    }



    if (sum <= 20) {
    message = "Do you want to draw a new card?"
} else if (sum === 21) {
    message = "You've got Blackjack!"
    hasBlackJack = true
} else {
    message = "You're out of the game!"
    isAlive = false
}

messageEl.textContent = message;
sumEl.textContent = 'Sum:' + sum;

}


//NB: Selectors are used most times when using a querySelector eg 
 //Instead of document.getElementById("name of element") we use:
 //document.querySelector, then inside the bracket we use the selector of our choice eg (.nameoftheelement)-for class element
                        //("#nameOfTheElement")- for Id element
                        //(nameOfTheElement) - for using the plain name of the element just like in css


function newCard(){
    console.log('Drawing a new card from the deck')

    // Only allow the player to get a new card if she IS alive and does NOT have Blackjack

   
    let newCard = getRandomCard();

    if(isAlive === true && hasBlackJack === false){
        let newCard = getRandomCard();
        sum += newCard;

        cards.push(newCard)

        console.log(cards)

        renderGame()


    }

    


}
 