//EXPORT EXPRESS, BODY-PARSER DAN CORS
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
var app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

//MEMBUAT END-POINT METHOD GET
app.get("/test",(req,res)=> {
    //Ini ada objectyang akan digunakan sebagai respon
    let response = {
        message: "Ini end point",
        method: req.method,
        code:res.statusCode
    }

    //untuk mengeluarkan respon dengan format json
    res.json(response)
})

//Fungsi untuk menjalankan server
app.listen(8000, () => {
    console.log("server run on port 8000")
})



//PRAKTIKUM PENGIRIMAN DATA MELALUI PARAMETER DENGAN METHOD GET
//end-point "/profile/nama/umur"
app.get("/profile/:name/:age",(req,res) => {
    //Ini method dinamis yang dapat diganti nilainya sesuai yang direquest

    let name = req.params.name //mengambil nilai name yang di request user
    let age = req.params.age //mengambil nilai age

    let response = {
        nama: name,
        umur: age
    }

    //untuk mengirim response pada server
    res.json(response)
})




//PRAKTIKUM PENGIRIMAN DATA MELALUI BODY DENGAN METHOD POST
//end-point "/bujur_sangkat" method POST
app.post("/bujur_sangkar",(req,res)=> {
    //mengambil niali dari body
    let panjang = Number(req.body.panjang) //Number merubah type data json menjadi numerik
    let lebar = Number(req.body.lebar)

    let luas = panjang*lebar
    let keliling = 2*(panjang+lebar)

    let response = {
        panjang: panjang,
        lebar: lebar,
        luas: luas,
        keliling: keliling
    }

    res.json(response)
})