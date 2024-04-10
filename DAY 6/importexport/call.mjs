const sum=(num1,num2)=>{
    return(num1+num2);
}
const mul=(num1,num2)=>{
    return (num1*num2);
}
const print=(msg)=>{
    console.log(msg);
}
export{sum,mul};            //import export use karne k liye extension .mjs lagana hota hai....
                      //{sum as ADD,mul as Multiply} name change karne ka format....
 
  export default print;                 //function ka koi bhi name hojaye import karte waqt uske lie"default"use kiya hai..... 