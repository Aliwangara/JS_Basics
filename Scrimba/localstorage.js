// Save a value to localStorage
// Delete your code and refresh the page
// Fetch your value from localStorage and log it out

let userName = "Ali wangara"

let storedUserName = localStorage.getItem("userName")
localStorage.setItem("userName", userName)



console.log(storedUserName)

// 1. Save a key-value pair in localStorage
// 2. Refresh the page. Get the value and log it to the console
// 3. Clear localStorage

// HINTS:
// localStorage.setItem(key, value)
// localStorage.getItem(key)
// localStorage.clear()
// PS: both key and value need to be strings

localStorage.setItem("myname", "ALI WANGARA")//saves item in the local storage


console.log(localStorage.getItem('myname'))// gets item from the local storage

localStorage.clear() //clears item in the local storage




/* local storage doesnt support non strings or rather it supports strings only.

    - for it to support non strings we use Json.Stringify eg:
                let names = [];
                localStorage.setItem("names- this is the key", json.Stringify(names))
                
    - the to get the value of the item we now take the data that has been stringified or 
        converted into strings and parse it using
        Json.Parse(localStorage.getItem('names -key that you had first placed in the set item'))

        Json.Stringify- Takes an item and converts it into strings.
        Json.parse - Takes a string and converts it to another data



*/


let myLeads = `["www.awesomelead.com"]`

// 1. Turn the myLeads string into an array
// 2. Push a new value to the array
// 3. Turn the array into a string again
// 4. Console.log the string using typeof to verify that it's a string

myLeads = JSON.parse(myLeads);

myLeads.push('www.Ali Wangara.com');

myLeads = JSON.stringify(myLeads)

console.log(typeof myLeads)






