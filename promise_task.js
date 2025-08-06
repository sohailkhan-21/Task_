function scan(){
    return new Promise((resolve,reject)=>{
        setTimeout (()=>{
            const qrcode = true
            if(qrcode){
                resolve("identified qr and details ")
            }
            else{
                reject("unable to scan qr code")
            }
        },5000);
    })
}
function pin(){
    return new Promise((resolve,reject)=>{
        setTimeout (()=>{
            const pin = true
            if(pin){
                resolve("pin correct proceed  ")
            }
            else{
                reject("you entered pin is incorrect")
            }
        },3000);
    })
}
function  tick(){
    return new Promise((resolve,reject)=>{
        setTimeout (()=>{
            const tick = false
            if(tick){
                resolve("blue tick appered >>>>sucessful  ")
            }
            else{
                reject("X unsucessfull payment >>>>>no blance")
            }
        },3000);
    })
}
async function js(){
    try{
        const a= await scan()
        console.log(a);
        const b= await pin()
        console.log(b);
        const c=await tick()
        console.log(c);  
    } catch (e){
        console.log(e);
    }

}
js();