const welcomeEl = document.getElementById("welcome-el")

// Give the function a parameter, greeting, that replaces "Welcome back"

function greetUser(greeting) {
    welcomeEl.textContent = greeting + ", Per Harald Borgen 👋"    
}
greetUser("hello")

//funcions with multiple parameters



function greetUser(greeting, name, emoji)/* here greeting, name and emoji are the parameters */ {
    welcomeEl.textContent = `${greeting} , ${name} ${emoji}`
}
greetUser("howdy", 'Ali', '👋')// and the parameters are now passed here



// Create a function, add(), that adds two numbers together and returns the sum



function add(firstNumber, secondNumber){

    return  firstNumber + secondNumber;

}
console.log( add(3, 4)   ) // should log 7
console.log( add(9, 102) ) // should log 111



// Create a function, getFirst(arr), that returns the first item in the array

function getFirst([first,second,third,fourth]){
    return [first, second]

}
 console.log(getFirst([2,3,4,5]))


// Call it with an array as an argument to verify that it works

// or we can use this parameter

function getFirst(arr){
    return arr[0]

}

console.log(getFirst([10,30,40,50]))
