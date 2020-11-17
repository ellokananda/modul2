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

app.post("/bmi", (req,res) => {
  let tinggi = req.body.tinggi
  let berat = req.body.berat

  let BMI = berat / (tinggi**2)

  if (BMI < 18.5) {
    res.json({
      Tinggi : tinggi,
      Berat : berat,
      BMI : BMI,
      Kondisi : "Kekurangan berat badan"
    })
  }
  else if (BMI >= 18.5 && BMI <= 24.9){
    res.json({
      Tinggi : tinggi,
      Berat : berat,
      BMI : BMI,
      Kondisi : "Normal (Ideal)"
    })
  }
  else if (BMI >= 25.0 && BMI <= 29.9){
    res.json({
      Tinggi : tinggi,
      Berat : berat,
      BMI : BMI,
      Kondisi : "Kelebihan berat badan"
    })
  }
  else {
    res.json({
      Tinggi : tinggi,
      Berat : berat,
      BMI : BMI,
      Kondisi : "Kegemukan"
    })
  }
})

//menjalankan server pada port 8000
app.listen(8000, () => {
  console.log("server run on port 8000");
})
