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


