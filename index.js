console.log("Hello World!"); //This is a statement

let nameB = "Blair"; // variable
console.log(nameB);

const nameC = "C" // constant, cannot be changed
//nameC = "D"
console.log(nameC);

let nameD = "Blair" //String literal
let age = 24; //Number literal
let isApproved = false; //Boolean literal, true/false are keywords
let firstName = undefined; //Can assign undefined
let lastName = null; //Can assign null

let person = {
    name: "Blair",
    age: 24,
    weight: 180
} //Create a 'person' object with three key/value types

console.log(person)

//Dot notation
person.name = "Blair2";
console.log(person.name);

//Bracket notation, useful when you dont know exactly what property would be selected, can input a variable inside []
person['name'] = "Blair3";

console.log(person.name);

//ARRAYS - lengths dynamic, can store different types in array
let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors);

//FUNCTIONS
function greet(name){
    console.log("Hello " + name)
}

greet("Blair");