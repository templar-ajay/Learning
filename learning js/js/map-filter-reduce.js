// console.log(`map filter and reduce in js`);
// const arr = [3, "hello", 6, 40, true];

// const index = arr.find((e) => e == "hello");
// console.log(`index`, index);

// const filteredArray = arr.filter((e) => e.length > 3);
// console.log(`filtered array`, filteredArray);
// console.log(`arr`, arr)

const arr = [45, 23, 21];

// Array Map Method
const newArr = arr.map((value, index, array) => {
  console.log(`value`, value);
  console.log(`index`, index);
  console.log(`array`, array);
  return value + index;
});
console.log(`newArr`, newArr);
console.log(`arr`, arr);

// Map returns a new array

// Array filter method
const arr2 = [45, 23, 21, 0, 3, 5];
let a2 = arr2.filter((a) => a < 10);
console.log(`a2`, a2);
console.log(`arr2`, arr2);

// Reduce Method
const arr3 = [1, 2, 3, 5, 2];
let newArr3 = arr3.reduce((x, y) => {
  return x + y; //here x = result of previous elements of the array,  y = current element of the array
});
console.log(`arr3`, arr3);
console.log(`newArr3`, newArr3);

//  reduce method returns a value
// reduce method reduces the array to a value
