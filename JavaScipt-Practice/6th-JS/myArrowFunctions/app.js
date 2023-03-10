//! --------------------Arrow function------------------------
//^ Arrow function can be used to represent regular function in a different manner
//^ Here the function keyword is not used, instead => is used. As like the traditional method it also requires parameter.

//^ Regular function

//^ Fully regular with no storing
// function add (x,y) {
//     return x + y;
// }

//^ Now storing that function
// let add = function (x, y) {
//     return x + y;
// } 

// console.log(add(7,9));

//^ Arrow function
// let add = (x, y) => {
//     return x + y;
// }

// console.log(add(15,18));

//^ We don't need parenthesis if there is only one parameter
// let square = a => {
//     return a * a;
// }

// console.log(square(9));

//^ Even if there is no parameters we need to have parenthesis
// let rollDie = () => {
//     return Math.floor(Math.random() * 6) +1; 
// }

// console.log(rollDie());

//! Implicit Return (Only works if there is only one line of code inside the function)
//^ The same arrow function can also be written without return keyword as well as without curly braces using simple parenthesis
// let rollDie = () => (
//     Math.floor(Math.random() * 6) +1
// ) 

// console.log(rollDie());

//^ This can also be written without any parenthesis in one line
// let rollDieAgain = () => Math.floor(Math.random() * 6) +1;
// console.log(rollDieAgain());

//^ Another example of arrow function

const movies = [
    {
      title: "Amadeus",
      score: 99,
    },
    {
      title: "Stand By Me",
      score: 85,
    },
    {
      title: "Parasite",
      score: 95,
    },
    {
      title: "Alien",
      score: 90,
    },
];

//^ For the map method we used to write

// const outOfTen = movies.map(function (movieName) {
//     return `${movieName.title} has got ${movieName.score / 10}`
// });

// console.log(outOfTen);

//^ With arrow method
// const outOfTen = movies.map(movieName => {
//     return `${movieName.title} has got ${movieName.score / 10}`
// })

// console.log(outOfTen);

//^ Implicit Return

const outOfTen = movies.map(movieName => (
    `${movieName.title} has got ${movieName.score / 10}`
))

console.log(outOfTen);