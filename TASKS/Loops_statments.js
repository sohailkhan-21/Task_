//loops in javascript are used to execute a block of code repeatedly
for (let a=1;a<=4;a++)
{
    console.log(a);
    
}
//While loop
let b=1;
while(b<=5){
    console.log(b)
    b++
}

//print your name 5 times
let x= 5
while (x>=1)
{
    console.log(x);
    console.log("sohail khan");
    
    x--
}
//do while
// initilazation
// do{
//     console
//     iteration
//   }
// while()

let xyz=5;
do{
    console.log(xyz);
    xyz--
    
}
while(xyz<=1)

// for of ======loop
const days =["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
for(b of days){
    console.log(b);
}

//for in
const obj={
    name:"sohail",
    city:"hyderabad",
    ph:9090909090,
    state:"telangana"
}
for (const q_keys in days){
    console.log(q_keys+":"+obj[q_keys]);
    
}