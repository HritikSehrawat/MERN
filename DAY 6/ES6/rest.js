// ..............rest parameters..............

// const sum=(num1,num2)=>{

//     console.log("sum of numbers: ",(num1+num2));    
// }
// sum(12,34,12,45,67,89);

const sum=(num1,num2,...numbers)=>{       // "...numbers" ek array bngaya three dots ki vjha se
    let s=0;
    if(numbers.length>0)
     s=numbers.reduce((a,b)=>a+b);
    console.log("Sum of numbers=",(num1+num2+s));
}
sum(12,34,12,45,67,89);
// if num1 and num2 both are zero then output is "NaN",num1 and num2 are default parameters

