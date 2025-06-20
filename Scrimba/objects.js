
// Objects - store data in-depth - composite / complex data type
// key-value pairs

// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation

let airBnb = {
    name : "Zamunda castle",
    occupied: true,
    Bedrooms : 3 ,
    Location : ["London", "Washington"]
}

console.log(airBnb.Bedrooms)
console.log(airBnb.Location)

// functions inside objects or also called methods. eg:

 airBnb = {
    name : "Zamunda castle",
    occupied: true,
    Bedrooms : 3 ,
    Location : ["London", "Washington"],

    // we create a function inside an object this way
    sayHello: function() {
        console.log("Heisann!")
    }
}
// we can console log the function now using . notation eg:

console.log(airBnb.sayHello())


 