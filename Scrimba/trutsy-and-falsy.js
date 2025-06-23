// these 6 values are falsy values

// false
// 0
// ""
// null ->  how you as a developer signalize emptiness
// undefined ->  how JavaScript signalizes emptiness
// NaN



//how null is used:

// let currentViewers = null

// currentViewers = ["jane", "nick"]

// if (currentViewers) {
//     // do something , e.g. notify the live streamers
//     console.log("we have viewers")
// }




//How JS uses undefined to signalize emptiness

let currentViewers;

console.log(currentViewers)



//check if vlue is trutsy or falsy

console.log(  Boolean("")   ) //falsy
console.log(  Boolean("0")  ) //truthy
console.log(  Boolean(100)  ) //truthy
console.log(  Boolean(null) ) //falsy
console.log(  Boolean([0])  ) //true
console.log(  Boolean(-0)   ) //falsy