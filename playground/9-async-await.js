
const add = (a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

            if(a < 0 || b <0){
                return reject('Negative Numbers!')
            }
            resolve(a+b)
        },2000)
    })
}



const doWork = async ()=>{
    
    const sum = await add(1,-99)
    const sum2 = await add(sum,-50)
    return sum2
}

//async always return a promise fullfilled with a return value of function
//await is making working with promises easeir by returning a value from the promise 



doWork().then((result)=>{
    console.log(result)
}).catch((e)=>{
console.log(e)
})