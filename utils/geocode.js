const request = require('request')

const yargs = require('yargs')

yargs.version('1.1.0')
const geocode = (address,callback) =>{

    //encode uri component method is for a messed up symplos to be handled 
     const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?limit=1&access_token=pk.eyJ1IjoibW9oYW1tZWRtOTgiLCJhIjoiY2p5MnF1eGQ5MG1teDNkb2loOGRvaTVqNSJ9.VNAyKlS29M3KP3au2bKDQA'

     request({url:url,json:true},(error,response)=>{
         if(error){

            callback('cant connect to geocode service',undefined)
         }
         else  if(response.body.features.length === 0){
            callback('bad input find another location',undefined)

         }
         else {

           
             callback(undefined,{
                 latitude:response.body.features[0].center[0],
                 longtude:response.body.features[0].center[1],
                 location:response.body.features[0].place_name
             })

         }
     })
    

}



const weatherForecast = (latitude,longtude,callback) =>{
    const url = 'https://api.darksky.net/forecast/6f0786a01a9eefc185c2dbf9c1afc27b/' + longtude+','+latitude+ '?units=si'

    request({url:url,json:true},(error,response)=>{

        if(error){
           
            callback('cant connect to weather service!',undefined)
        }
        else if(response.body.currently){
            callback(undefined,response.body.daily.summary + 'Its currently '+ response.body.currently.apparentTemperature + '  degress out and there a chance of rain :  '+ response.body.currently.precipProbability + '%')
        }


    })

}

module.exports = {geocode:geocode,
    weatherForecast:weatherForecast}