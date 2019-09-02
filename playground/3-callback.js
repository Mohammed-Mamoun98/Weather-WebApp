// setTimeout(() => {

// print('Two sec Timer!')

// },2000)

// const geocode = (address,callback) =>{

//    setTimeout(()=>{

//     const data = {
//         latitude:0,
//         logtude:0
//     }


//     callback(data)

//    },2000)
// }


// geocode('palestine',(data)=>{
//     console.log(data)
// })




//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!



const add = (num1,num2,callback) =>{
    setTimeout(()=>{

        callback(num1+num2)

    },2000)
}


add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})


const a = (num,callback) =>{
    setTimeout(()=>{

            callback(num)
    },2000)
}

a(1,(num)=>{
console.log(num)
})


//////////////////////////////

const doWorkCallback = (callback)=>{

    setTimeout(()=>{
        // callback('Error',undefined)
        callback(undefined,'this is my Result!')
    
    },2000)

}

doWorkCallback((error,result)=>{

    if(error){
        return console.log(error)
    }

    console.log(result)

})





















