let welcomeEl = document.getElementById('welcome-el');

let name = 'Ali';
let greeting ='Welcome back, ';

welcomeEl.innerText = greeting + ' ' + name;


welcomeEl.innerText = welcomeEl.innerText + '😊';





//template Strings
const recipient = "James"
const sender = "Ali wangara"

// Break the email string into multiple lines
const email = `Hey ${recipient}
! How is it going? 
Cheers ${sender}`

console.log(email)
