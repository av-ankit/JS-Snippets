//creating promise/ producing code
let myPromise = new Promise((resolve,reject)=>{
    const success = true;
    setTimeout(()=>{
        if(success)
        resolve("Promise is resolved")
        else
        reject("Promise is rejected")
    },1000)
})

//consuming code/ consuming promise
myPromise.then(res=>{console.log("Success:",res);console.log(myPromise)}).catch(err=>{console.log("error: ",err);console.log(myPromise)})

console.log(typeof myPromise)
console.log(myPromise)
