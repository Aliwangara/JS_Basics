let firstName = 'Ali';
let lastName = 'Wangara';

let greetings = 'Hi there'

let fullName = firstName + ' ' + lastName;

console.log(fullName)

// functions

function greeting(){

   let allGreetings = greetings + ', ' + fullName + '!';
   console.log(allGreetings)

}

greeting()


//Incrementing and decrementing

let myPoints = 3;

function add3Points() {

    myPoints +=3;

    

}

add3Points()
add3Points()
add3Points()


function remove1Point(){

    myPoints-=1;

    


}

remove1Point()
remove1Point()




console.log(myPoints)



// Strings and Numbers

// Try to predict what each of the lines will log out
console.log("2" + 2) // 22
console.log(11 + 7) // 18
console.log(6 + "5") // 65
console.log("My points: " + 5 + 9) // Mypoints 59
console.log(2 + 2) // 4
console.log("11" + "14") //  1114


//if else conditionals

// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

let age = 22

// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"


if (age < 21) {

    console.log('You can not enter the club!')
}else{
    console.log("Welcome!")
}

// Check if the person is elegible for a birthday card from the King! (100)

let Age = 100;

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"

if (Age < 100) {
    console.log("Not elegible")
}
else if(Age === 100){
    console.log("Here is your birthday card from the King!")
}
else{
    console.log("Not elegible, you have already gotten one")
}


let firstCard = 10;
let secondCard = 12;
let sum = firstCard + secondCard;
let hasBlackJack = false
let isAlive = true;

// Write the conditional according to these rules:

// if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
// else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
// else -> "You're out of the game! 😭"

if (sum <= 20){
    console.log("Do you want to draw a new card? 🙂")
}else if(sum === 21){
    console.log("Wohoo! You've got Blackjack! 🥳")
}
else{
    console.log("You're out of the game! 😭")
}



//Booleans

// 1. Declare a variable called message and assign its value to an empty string

// 2. Reassign the message variable to the string we're logging out



// 1. Create a variable called isAlive and assign it to true
let message = '';

// 2. Flip its value to false in the appropriate code block 
if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂";
} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";
    hasBlackJack = true
} else {
    message = "You're out of the game! 😭";
    isAlive = false;
}

// 3. Log it out to check that you're doing it right

console.log(message)

console.log(isAlive)


console.log(4 === 3)  // false
console.log(5 > 2)    // true
console.log(12 > 12)  // false
console.log(3 < 0)    // false
console.log(3 >= 3)   // true
console.log(11 <= 11) //true
console.log(3 <= 2)   //false
