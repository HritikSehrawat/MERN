let age=20;
const info=new Promise((resolve,reject)=>{
    if(age>=18){
        resolve("you can vote");
    }else{
        reject("you can to vote");
    }
})
info.then(result=>console.log(result))      //resolve then mei aayega
    .catch(error=>console.log(error));      // reject catch mei aayega

 const resultInfo=async()=>{
    try{
    let result=await info;                 // async await reject ko manta hi ni hai uske liye sab true hai....
    console.log(result);                   //try catch lagake ise solve kar sakte hai reject k matter mei....
    }catch(error){
        console.log(error);
    }
 }   
 resultInfo();