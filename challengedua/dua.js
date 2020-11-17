const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library body-parser
const cors = require("cors") // memanggil library cors
const app = express()

// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())

// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))

// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

// celcius
app.get("/convert/celcius/:cel" ,(req,res)=>{

let cel = Number(req.params.cel)

let r = 4/5 * cel
let f = (9/5 * cel)+32
let k = cel+ 273

let response ={
  celcius :cel,
  reamur :r,
  fahrenheit:f,
  kelvin:k,
}

  res.json({
    celcius: cel,
    result: response})

})

// reamur
app.get("/convert/reamur/:re" ,(req,res)=>{

let re = Number(req.params.re)

let c = 5/4 * re
let f = (9/4 * re)+32
let k = (5/4*re)+ 273

let response ={
  celcius :c,
  fahrenheit:f,
  kelvin:k,
}

  res.json({
    reamur: re,
    result: response})

})

// kelvin
app.get("/convert/kelvin/:ke" ,(req,res)=>{

let ke = Number(req.params.ke)

let c = ke - 273
let f = 9/5 *( ke - 273)+32
let r = 4/5 *( ke - 273)

let response ={
  celcius :c,
  fahrenheit:f,
  reamur:r,
}

  res.json({
    kelvin: ke,
    result: response})

})

// Fahrenheit
app.get("/convert/fahrenheit/:fa" ,(req,res)=>{

let fa = Number(req.params.fa)

let c = 5/9 * (fa-32)
let r = 4/9 * (fa-32)
let k = 5/9*(fa-32)+273

let response ={
  celcius :c,
  reamur:r,
  kelvin:k,
}

  res.json({
    fahrenheit: fa,
    result: response})

})


app.listen(3000, () => {
        console.log("Server run on port 3000");
    })