const msg=()=>{
    console.log("Welcome to arrow function");
};
msg();

const sum=(num1,num2)=>console.log("Sum =",(num1+num2));
sum(23,56);

const mul=(num1,num2)=>num1*num2;
console.log("Multiply=",mul(23,56));

const mul1=(num1,num2)=>{
    return num1*num2;
};
console.log("Multiply=",mul1(32,54));


// ek se jyada line return karne k liye ye vala format use karte hai parenthesis lagake unke andr daldete hai
// const msg2=()=>
// (
//     console.log("Welcome to arrow function");
//     console.log("Welcome to arrow function again");
// );
//msg2();