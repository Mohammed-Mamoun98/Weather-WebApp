const request = require('request')
const weather = (add,callback)
request({url,json:true},(error,response)=>{
    if(error){
        callback('cant connect to service!',undefined)
    }
})