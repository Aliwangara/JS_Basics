// 1. Grab the save-el paragrah and store it in a variable called saveEl
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

let saveEl = document.getElementById('save-el');

function save() {

    let countDash = count + ' - ' 
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph

    saveEl.textContent += countDash

    countEl.textContent = 0;
     
    count = 0;

     
    console.log(count)
}






