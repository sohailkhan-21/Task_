function go(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("go to Dmart")
        },2000)
    })
}
function buy(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("buy chocolates"); 
        },1000);
        })
}
function get(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("collect changes"); 
        },4000);
        })
}
function back(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("come back to home"); 
        },5000);
        })
}
go()
.then(val=>{console.log(val);return buy()})
.then(val=>{console.log(val);return get()})
.then(val=>{console.log(val);return back()})
.then(val=>{console.log(val)})



//paymnt done or not
//payment suceessfull or not
//blue tick