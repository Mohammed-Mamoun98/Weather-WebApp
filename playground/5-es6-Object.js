const print = (string) =>{
    console.log(string)
}


const name = 'Andrew'

const age = 27

const usr = {
    name:name,
    age:age,
    location:'Pheladelphia'
}



const usr1 = { // ES6 object declaration, the key and value got the same name
    name,
    age,
    location:'Pheladelphia'
}


//de structuring

const product  = {
    label:'noteBook',
    price: 3,
    stock:30
}
                                                                            //value    new property name
const {label,price} = product //you can change the name of property by const {label: productLabel}
const {label:productLabel} = product


//we have specified a default parameters if there is no object it will display an undefined insted of error
const transaction = (type,{label,stock = 0} = {})=>{
    console.log(type,label,stock)
}
// print(productLabel)
// print(price)


transaction('order')
transaction('order',product)