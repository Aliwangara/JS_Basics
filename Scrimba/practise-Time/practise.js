// objects practise

// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works

let person = {
    name : 'Ali Wangara',
    age : 21, 
    country : 'Kenya'
}

function logData(){

    console.log(`${person.name}  is  ${person.age} years old and lives in  ${person.country}`)
}
logData()

//if else or conditional statements

let age = 15

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable


if(age < 6){
    console.log('Free')
} else if (age <= 17){
    console.log('child discount')
}else if (age <= 26){
    console.log('student Discount')
}else if(age <= 66){
    console.log('full price')
}else {
    console.log('senior citizen  discount') 
}

// loops and arrays

let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan
*/

console.log("The 5 largest countries in the world: ")
for (let i = 0; i < largeCountries.length; i++){
    console.log(' - ' + largeCountries[i] )
}

//Pop(), Unshift(), push(), shift()

let largeNations= ["Tuvalu","India","USA","Indonesia","Monaco"]

// You need to help me fixup the largeCountries array so that 
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()

largeNations.pop("Monaco");
largeNations.push("Pakistan");

largeNations.shift("Tuvalu");
largeNations.unshift("China")


//logical operators

let dayOfMonth = 31
let weekday = "Friday"

// If it is Friday the 13th, log out this spooky face: 😱
// Use the logical "AND operator" -> &&

if (dayOfMonth === 13 && weekday === 'Friday'){
    console.log('😱')
}

// functtions and arrays 
let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function random(){
    let answer = Math.floor(Math.random()*12)+1 // - 0-11.9999 if we .floor it goes to th nearest smallest digit
                                                //- eg 11 then +1 it becomes 12
    
    
    if(answer < 6){
        return hands[0];
    }else if( answer < 11){
        return hands[1];
    }else{
        return hands[2];
    }
    
}

random()
console.log(random())// or we can do it this way:

function getHand() {
    let randomIndex = Math.floor( Math.random() * 3)
    return hands[randomIndex]
}

// emoji fighter game

let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.

    let randomFight1  = Math.floor(Math.random()* fighters.length)
     let randomFight2  = Math.floor(Math.random()* fighters.length)

     stageEl.textContent = `${fighters[randomFight1]}  vs ${fighters[randomFight2]}`



    console.log(`${fighters[randomFight1]}  vs ${fighters[randomFight2]}`)

    
})

//sorting fruits

let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

function fruitSorting(){
    for (let i =0; i < fruit.length; i++){
        if(fruit[i] === "🍎"){
            appleShelf.textContent += "🍎"
        }else if(fruit[i] ===  "🍊" ){
            orangeShelf.textContent += "🍊"
        }
    }


    
    
}
