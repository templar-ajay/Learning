console.log("Welcome to Date Tutorial")

let today = new Date();
// console.log(typeof today)

let otherDate = new Date('8-4-2003 04:54:08');
otherDate = new Date("November 12 1999");
otherDate = new Date('11/12/99 1:15 AM ') 

// MM DD YY format 

// console.log(otherDate);

a = otherDate.getDay()
a = otherDate.getDate();
a = otherDate.getMinutes();
a = otherDate.getSeconds();
a = otherDate.getHours();


console.log(a);
