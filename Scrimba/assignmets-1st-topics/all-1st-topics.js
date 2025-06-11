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


