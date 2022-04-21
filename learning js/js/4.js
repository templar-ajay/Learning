console.warn("arrays and objects");

let marks = [34,56,34,56,4,32]
let fruits = [`mango`,` banana`,`orange`]
let mixed  = [23,"mango" , 44,`orange`]

const arr = new Array(24,54,111,`cheeku`)

console.log(arr);
console.log(fruits)
console.log(marks);
console.log(fruits[1]);
console.log(arr.length)


console.log(Array.isArray(arr));
console.log(Array.isArray("fds"));

let indexValue = marks.indexOf(56)
console.log(indexValue);
//  gym the shaukeen heavy weight maarde
console.log(marks);

marks.splice(2, 2)
console.log(marks);

marks.reverse();
console.log(marks);

let marks2 = [1,2,3]
marks = marks.concat(marks2)
console.log(marks);

let obj = {
    name : "ajay",
    class : "A1",
    marks : 002,
    "roll numbers" : [2,6,"002"]
}
console.log(obj);
console.log(obj.name);
//imp⭐
console.log(obj["roll numbers"][2]);

