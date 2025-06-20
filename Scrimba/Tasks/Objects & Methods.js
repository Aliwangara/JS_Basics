const book ={
    title: 'Atomic Habits',
    author : 'James Clear',
    pages : 320,
    isAvailable : true,
    tags : ['cue', 'response' , 'craving', 'Habit stacking'],

    bookinfo : function(){
        console.log(` ${book.title }, by ${book.author}, ${book.pages}pages - Available`)
    }


}

console.log(book.title)
console.log(book.isAvailable)

book.bookinfo()


let person = {
    name : 'Ali',
    age : 21,
    country : 'Kenya'
}

function logData(){
    console.log(` ${person.name} is ${person.age} years old and lives in ${person.country}`)
}
logData()

