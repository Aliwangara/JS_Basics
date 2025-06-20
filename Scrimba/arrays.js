// Arrays
    //- are ordered lists of items.

    // Create an array that lists your i.e. experience, education, licenses, skills or similar
// The items of the array should be strings

// arrays are 0 indexed or starts from 0

let myExperience = ["Worked with WHTA Networks", 
    "Currently working as a freelance Dev",
    "Exploring remote opportunities"

]

console.log(myExperience[1], myExperience[2], myExperience[0]);

// Array - ordered list of items - coposite / complex data type

// Create an array that describes yourself. Use the three primitive data types you've learned
// It should contain your name (string), your age (number), and whether you like pizza (boolean)


let myName = 'Ali Wangara';
let age = 21;
let likePizzza = true

let myself =[myName, age, likePizzza];

// operations one can perform in the array
//.push - adding an item to the end of an array eg:
    let cards = [1,2,4]

    cards.push(7);
    console.log(cards)
// 7 is placed here [1,2,4,7]

// Push the newMessage to the messages array, and then log out the array

let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately."
]

let newMessage = "Same here!"

messages.push(newMessage);

console.log(messages);

messages.pop(2)

console.log(messages)

//logout items in an arrays



let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

// Create a function that takes a single parameter, an array,
// and logs all the items of the array to the console.
// Call the function while passing in myCourses as an argument

function logItems(arr){
    for (let i = 0; i < arr.legnth; i++){
        console.log(arr[i])
    }
}
logItems(myCourses)
