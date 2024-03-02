/*
console.log("jsRvision.js")

const arr = [1,2,3,4,5];
console.log("array", arr)

arr.push(6)
arr.push(7)
console.log( arr)
// console.log( arr.pop())

// console.log(arr.unshift(9))
// console.log(arr.shift())

// console.log(arr.includes(6))
// console.log(arr.indexOf(6))

// const newArr = arr.join()
// console.log(newArr)

console.log("A", arr)

const arr1 = arr.slice(1,3)
console.log(arr1)

console.log("B", arr)

const arr2 = arr.splice(1,3)
console.log(arr2)

console.log("C", arr)

*/

const myName = ["Ram","Omkar", "Sham"]
const g_name= ["Geeta", "Seeta"]

// myName.push(name)
// console.log(myName)
// console.log(myName[3][1]);

// const newarray = myName.concat(g_name)
// console.log(newarray)

// const anotherArray = [...myName, ...g_name]
// console.log(anotherArray)

// const arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const newArr = arr.flat(Infinity)
// console.log(newArr)

// console.log(Array.isArray("bhoal"))
// console.log(Array.from("bhoal"))
// console.log(Array.from({name:"bhoal"})) // imp

// let score1 = 100;
// let score2 = 200;
// let score3 = 300;

// console.log(Array.of(score1,score2,score3))



// let x= {}, y = {name:"Ronny"},z = {name:"John"};

//  x[y] = {name:"Vivek"}; // y.toString() 
//  x[z] = {name:"Akki"}; 

// console.log(x[y]);


// let obj = {a:1,"b":5,c:2,d:34}
// console.log(obj["c"])

// y.toString() 
// "[Object Object]""
// x"[Object Object]"

//z.toString() 
// "[Object Object]"
// z"[Object Object]"



// let a = true;
// let b = 'true'; 

// console.log((a == b));   
// console.log((a === b));

let userInput = "Please enter a string"

let words = userInput.split(" ");
console.log(words)

let reversedWords = words.reverse();
console.log(reversedWords)

let output = reversedWords.join(" ");
console.log(output)