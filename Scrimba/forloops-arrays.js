//for loops can be used together with arrays


let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately.",
    "Same here!",
    "Great to hear"
]

// DRY - Don't repeat yourself 

for (let i = 0; i < messages.length ; i += 1 ){

        console.log(messages[i])
}

let cards = [7, 3, 9]

// Create a for loop that logs out all the cards in the array
// Use cards.length to specify how long the loop should run

for (let i = 0; i < cards.length ; i++){
        console.log(cards[i])
}
