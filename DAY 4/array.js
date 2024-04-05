// everything in javascript is object .... array mei sab "object" hai


const msg=()=>console.log("Arrow Function");
let data=[10,30,40,50,60.2,"KIET",msg];
console.log(data);
data[6]();    // location pe jake call kiya....

// for(let i= 0;i<data.length;i++){
//     console.log(`value of ${i} is ${data[i]}`);    // this is known as string literals...
// }

// tab vali key k upr vala symbol ``.....


               //.....for in loop.....
// for(let index in data){
//     console.log(`value of ${index} is ${data[index]}`);
// }

            //........for of loop.......

// for(let value of data){
//     console.log(`value of array=${value}`);
// }

             //.......for Each loop.........

data.forEach(value=>console.log(`value of array=${value}`));