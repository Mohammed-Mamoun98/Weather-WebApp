const express = require('express')
const hbs = require('hbs')
const path = require('path')
const app = express()




app.set('view engine','hbs')
//app.use(express.static(path.join(__dirname ,'../static')))
app.set('views',path.join(__dirname,'../template/views'))


 
app.get('',(req,res)=>{

    res.render('index')
})


app.listen(3000)