const express = require("express") //memanggil library express
const bodyParser = require("body-parser") //memanggil library body-Parser
const cors = require("cors") //memanggil library cors
const app = express()

//peggunaan body parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())

//penggunaan bodyParseruntuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))

//penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

//endpoint1
app.post("/desimal",(req,res) => {
  var bilangan = parseInt(req.body.bilangan)
  let hexadesimal =  (bilangan).toString(16)
  let oktal = (bilangan).toString(8)
  let biner = (bilangan).toString(2)

  res.json({
    Desimal : bilangan,
    Hexadesimal : hexadesimal,
    oktal : oktal,
    biner : biner
  })
})

//endpoint2
app.post("/biner",(req,res) => {
  var bilangan = parseInt(req.body.bilangan)
  let desimal = parseInt(bilangan, 2)
  let hexadesimal = (desimal).toString(16)
  let oktal = (desimal).toString(8)

  res.json({
    Biner : bilangan,
    Hexadesimal : hexadesimal,
    Oktal : oktal,
    Desimal : desimal
  })
})

//endpoint3
app.post("/oktal",(req,res) => {
  var bilangan = parseInt(req.body.bilangan)
  let desimal = parseInt(bilangan, 8)
  let hexadesimal = (desimal).toString(16)
  let biner = (desimal).toString(2)

  res.json({
    Oktal : bilangan,
    Hexadesimal : hexadesimal,
    Biner : biner,
    Desimal : desimal
  })
})

//endpoint4
app.post("/hexadesimal",(req,res) => {
  var bilangan = parseInt(req.body.bilangan)
  let desimal = parseInt(bilangan, 16)
  let oktal = (desimal).toString(8)
  let biner = (desimal).toString(2)

  res.json({
    Hexadesimal : bilangan,
    Biner : biner,
    Oktal : oktal,
    Desimal : desimal
  })
})

//menjalankan server pada port 8000
app.listen(8000, () => {
  console.log("server run on port 8000");
})
