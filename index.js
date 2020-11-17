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

// endpoint1 "/test" dengan method get
app.get("/test", (req,res) => {
  //req merupakan variabel yang berisi data request
  //res merupakan variabel yag bersi data response dari end-point

  //membuat objek yang berisi data yang akan dijadikan response
  let response = {
    message: "ini end-point",
    method: req.method,
    code: res.statusCode
  }
  //memberikan response dengan format json yang berisi objek diatas
  res.json(response)
})

//endpoint2 "/profil/nama/umur" dengan method get
app.get("/profil/:name/:age", (req,res) => {
  // :name dan :age diberikan titik dua didepan menunjukkan "name" dan "age"
  //bersifat dinamis yang dapat diganti nilainya saat melakukan request
  //menamoung data yang dikirimkan
  let name = req.params.name //mengambil nilai pada parameter name
  let age = req.params.age //mengambil nilai pada parameter age

  //membuat objek yang berisi data yang akan dijadikan response
  //response berisi data nama dan umur sesuai dengan nilai parameter

  let response = {
    nama: name,
    umur: age
  }

  //memberikan response dengan format json yang berisi objek diatas
  res.json(response)
})

//endpoint3 "/bujur_sangkar" dengan method post
app.post("/bujur_sangkar", (req,res) => {
  //menampung data yag dikirmkan dan mengkonversi mejadi tipe numerik
  let panjang = Number(req.body.panjang) //mengambil nilai panjang dari body
  let lebar = Number(req.body.lebar)

  let luas = panjang * lebar
  let keliling = 2 * (panjang + lebar)

  //membuat objek yang berisi data yang akan dijadikan esponse
  let response = {
    panjang: panjang,
    lebar: lebar,
    luas: luas,
    keliling: keliling
  }
  res.json(response)
})

//menjalankan server pada port 8000
app.listen(8000, () => {
  console.log("server run on port 8000");
})
