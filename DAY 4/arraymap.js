let value=[1,2,3,4,5,6,7,8,9,10];
value.push(11);         // to add value in array.....use "push".....
console.log(value);

value.map(item=>console.log(`value X 10 =${item*10}`));

let sumValue=value.reduce((a,b)=>a+b);     //a "a+b" ki value hai or b barbar jo value aari hai vo hai.......0 se initialise hota hai...
console.log(`Sum of array value=${sumValue}`);     //  0+1=1=a

let evenNum=value.filter(item=>item%2===0);  // same datatype ko equate karne k liye === use karte hai....
console.log(evenNum);    
