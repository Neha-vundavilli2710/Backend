const mypromise=new Promise((resolve,reject)=>{
    if(true){
        console.log("if executed");
        resolve("successfully complete");
    }
    else{
        console.log("else executed");
        resolve("api failed")
    }
})
mypromise.then((result)=>console.log(result))
.catch((error)=>console.log(error));