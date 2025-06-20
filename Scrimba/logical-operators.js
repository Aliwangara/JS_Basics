let hasCompletedCourse = true
let givesCertificate = true


//&& - and operator checks if all the conditions are true then runs the code eg:

function generateCertificate() {

    if(hasCompletedCourse === true && givesCertificate === true){

        console.log("Generating certificate....")
    }
    
}

let hasSolvedChallenge = false
let hasHintsLeft = false

// Create an if statement that checks that both variables are false.
// If so, run the showSolution() function

function showSolution() {
    console.log("Showing the solution....")
}

if (hasSolvedChallenge === false && hasHintsLeft === false){
    showSolution()
}


// ||- or operator checks if either of the opeation is true runs the code eg:

// Create two boolean variables, likesDocumentaries and likesStartups
// Use an OR statement (||) to call recommendMovie() if either of those variables are true

let likesDocumentaries = false;
let likesStartups = true;

if(likesDocumentaries === true || likesStartups ===true){
    recommendMovie()
}


function recommendMovie() {
    console.log("Hey, check out this new film we think you will like!")
}

// so if we change both of them to be the opposite the || wont work because neither of the condition is true eg:

 likesDocumentaries = false;
 likesStartups = false;

if(likesDocumentaries === true || likesStartups ===true){
    recommendMovie()
}