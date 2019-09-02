const request = require('request')

const yargs  = require('yargs')
//,-122.4233?units=si&lang=es

//const url = 'https://api.darksky.net/forecast/6f0786a01a9eefc185c2dbf9c1afc27b/37.8267,-122.4233?units=si' //we have add ?units to customize the data unit.

// request({url:url,json:true /* this argument is to get the response already parsed! */ },(error,response)=> {

//     const weatherObject = response.body.currently
//     print(response.body.daily.data[0].summary+'  It\'s currently '+weatherObject.temperature + ' degrees out. there is a chance ' + weatherObject.cloudCover + '% chance of rain')
//     if(response.body.code === true){
//         print('there is an error in the url')
//     }

//      if(error){


// print('Error at HTTP request!')
// print(response.statusCode)
        
//     }

//     else if(response.body.error){
// print('error in the url!')
//     }
//     else
    
//     {
//         const weatherObject = response.body.currently

//     print(response.body.daily.data[0].summary+'  It\'s currently '+weatherObject.temperature + ' degrees out. there is a chance ' + weatherObject.cloudCover + '% chance of rain')

   
//     }

// })

// const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/palestine.json?limit=1&access_token=pk.eyJ1IjoibW9oYW1tZWRtOTgiLCJhIjoiY2p5MnF1eGQ5MG1teDNkb2loOGRvaTVqNSJ9.VNAyKlS29M3KP3au2bKDQA'

// request({url:url,json:true},(error,response)=>{

    
//     if(error){
//         print('can\'t connect to geoloaction service')
//     }

//     else if(response.body.message){
//         print('error in user input!')
//     }
//     else if(response.body.features ){
//         if(response.body.features.length === 0){
//         print('no such location, find another one!')
//         }
//         else 
//         {
//             print(response.body.features[0].center)

//         }
//     }
   




//     // const data = JSON.parse(response.body)
//     // print(data.features[0].center)
//     // const centerAxis = data.features[0].center

//     // print('The specifed location is: ' + centerAxis[0] + ' longtude and '+ centerAxis[1] + ' latitude.')
    
// })











// const print = (string) =>{
//     console.log(string)
// }



const address = yargs.argv.location
const obj = {
    name:'ali',
    age:16
}

const {name,age} = obj
console.log(name);

const forecast = require('./utils/geocode.js')

if(!address){
    console.log('no location!')
}
else{


forecast.geocode(address,(error,{latitude,longtude,location})=>{
   if(error){
     return  console.log(error)
   }
   
   
    forecast.weatherForecast(latitude,longtude,(error,data)=>{
        if(error){
            console.log(error)
        }
       
        console.log(location)
        console.log(data)
        
    })
    
    })
   
}





















