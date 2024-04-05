let studentInfo={
    rollno:1,
    name:"Hritik",
    course:"MCA",
    college:"KIET",
    marks:[50,60,70,80],
    music:()=>console.log("Play music"),
    play:function playfun(){console.log("Play cricket")},
}
console.log(studentInfo);
console.log(studentInfo.name);
console.log(studentInfo.music());
console.log(studentInfo.play());
studentInfo.marks.forEach(value=>console.log(`value of marks=${value}`));

let arrayvalue=[studentInfo,studentInfo,studentInfo];
arrayvalue.forEach(item=>console.log(item.name));