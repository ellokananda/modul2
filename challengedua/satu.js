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

// endpoint1
app.post("/segitiga", (req,res) => {
  let sisi = Number(req.body.sisi)
  let alas = Number(req.body.sisi)
  let tinggi = Number(req.body.sisi)

  let luas = (alas * tinggi) / 2
  let keliling = sisi + sisi + sisi

  //membuat objek yang berisi data yang akan dijadikan esponse
  let response = {
    sisi: sisi,
    alas: alas,
    tinggi: tinggi,
    luas: luas,
    keliling: keliling
  }

  //memberikan response dengan format json yang berisi objek diatas
  res.json(response)
})

//endpoint2
app.post("/persegi", (req,res) => {
  let sisi = Number(req.body.sisi)

  let luas = sisi * sisi
  let keliling = 4 * sisi

  //membuat objek yang berisi data yang akan dijadikan esponse
  let response = {
    sisi: sisi,
    luas: luas,
    keliling: keliling
  }

  //memberikan response dengan format json yang berisi objek diatas
  res.json(response)
})

//endpoint3
app.post("/persegi panjang", (req,res) => {
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

//endpoint4
app.post("/lingkaran", (req,res) => {
  //menampung data yag dikirmkan dan mengkonversi mejadi tipe numerik
  let jari = Number(req.body.jari)

  let luas = 3.14 * jari * jari
  let keliling = 2 * 3.14 * jari

  //membuat objek yang berisi data yang akan dijadikan esponse
  let response = {
    jari: jari,
    luas: luas,
    keliling: keliling
  }
  res.json(response)
})

//menjalankan server pada port 8000
app.listen(8000, () => {
  console.log("server run on port 8000");
})
