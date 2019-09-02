// const doWorkPromise = new Promise((resolve,reject)=>{

//     //resolve for condition achivment and reject for not
//     //when the reject is called first it doesnt look to any other resolve or rejct statment
// setTimeout(()=>{
//     reject('Error occured!')
//       //resolve([7,4,1])
// },2000)
    
// })

// //doWorkPromise is an object so we acces it's methods
// //then is for resolve and catch for reject

// doWorkPromise.then((result)=>{

//     console.log('Succes!',result)
// }).catch((error)=>{

//     console.log('Failure!',error)
// })


//--------------------------------------------------------------------------------------
//this is a nested promise (complex version)

const add = (a,b)=>{

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(a+b)
        },2000)
    })
}

// add(1,2).then((sum)=>{

//     console.log(sum)

//     add(sum,3).then((sum2)=>{
//         console.log(sum2)
//     }).catch((e)=>{
//         console.log(e)
//     })
// }).catch((e)=>{
//     console.log(e)
// })


add(1,2).then((sum)=>{
    console.log(sum)
    //promise chaining is a nested one but with a better syntax due to return
    return add(sum,2)
}).then((sum2)=>{
    console.log(sum2)
}).catch((e)=>{
    console.log(e)
})
















