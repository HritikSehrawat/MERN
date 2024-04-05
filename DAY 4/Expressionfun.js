const msg=function message(){
    console.log("Welcome to function expression");
};
msg();

// const msg=function (){
//     console.log("Welcome to function expression");
// };
// msg();

const sum=function(num1,num2){
    let sum=num1+num2;
    console.log("Sum=",sum);
}
console.log(typeof sum);
sum(23,45);

const mul=function (num1,num2){
    return num1*num2;
};
console.log("Multiply=",mul(12,10));