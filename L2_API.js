//EXPORT EXPRESS, BODY-PARSER DAN CORS
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const { response } = require("express")
var app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

app.listen(8000, () => {
    console.log("server run on port 8000")
})


//NOMER 1
//End-point "/balok" (GAMBAR 1.1)
app.post("/balok",(req,res)=> {
    let p = Number(req.body.panjang)
    let l = Number(req.body.lebar)
    let t = Number(req.body.tinggi)

    let luas = 2*(p*l+p*t+t*l)
    let volume = p*l*t

    let response = {
        bangun: "Balok",
        panjang: p,
        lebar: l,
        luas: luas,
        volume:volume
    }

    res.json(response)
})


//End-point "/kubus" (GAMBAR 1.2)
app.post("/kubus",(req,res)=> {
    let r = Number(req.body.rusuk)

    let luas = 12*r*r
    let volume = r**3

    let response = {
        bangun:"Kubus",
        rusuk: r,
        luas: luas,
        volume:volume
    }

    res.json(response)
})

//End-point "/bola" (GAMBAR 1.3)
app.post("/bola",(req,res)=> {
    let ri = Number(req.body.jari)

    let luas = 4*3.14*ri*ri
    let volume = 4/3*3.14*ri**3

    let response = {
        bangun:"Bola",
        rusuk: ri,
        luas: luas,
        volume:volume
    }

    res.json(response)
})


//End-point "/kerucut" (GAMBAR 1.4)
app.post("/kerucut",(req,res)=> {
    let r = Number(req.body.jari)
    let t = Number(req.body.tinggi)
    let s = Number(req.body.sisimiring)

    let luas = 3.14*r*(r+s)
    let volume = 1/3*3.14*r*r*t

    let response = {
        bangun:"kerucut",
        rusuk: r,
        tinggi:t,
        sisimiring:s,
        luas:luas,
        volume:volume
    }

    res.json(response)
})




//NOMER 2
app.get("/convert/:satuan/:suhu",(req,res)=>{
    let satuan = req.params.satuan
    let x = req.params.suhu
    let c,r,f,k,response

    if(satuan === "celcius"){
        let cn = Number(x)

        r = 4/5*cn
        f = 9/5*cn
        k = cn+273

        //Response untuk masukan bernilai celcius (GAMBAR 2.1)
        response = {
            celcius: x,
            result: {
                reamur: r,
                fahrenheit: f,
                kelvin: k
            }
        }
    }else if(satuan === "reamur"){
        let rn = Number(x)

        c = 5/4*rn
        f = 9/4*rn+32
        k = 5/4*rn+273
    
        //Response untuk masukan bernilai reamur (GAMBAR 2.2)
        response = {
            reamur: x,
            result: {
                celcius:c,
                fahrenheit: f,
                kelvin:k
            }
        }
    }else if(satuan == "kelvin"){
        let kn = Number(x)

        c = kn-273
        r = 4/5*(kn-273)
        f =  9/5*(kn-273)+32
    
        //Response untuk masukan bernilai kelvin (GAMBAR 2.3)
        response = {
            kelvin: x,
            result: {
                celcius: c,
                reamur: r,
                fahrenheit:f
            }
        }

    }else if(satuan == "fahrenheit"){
        let fn = Number(x)

        c = 5/9*(fn-32)
        r = 4/9*(fn-32)
        k =  5/9*(fn-32)+273

        //Response untuk masukan bernilai fahrenheit (GAMBAR 2.4)
        response = {
            fahrenheit:x,
            result: {
                celcius: c,
                reamur: r,
                kelvin:k
            }
        }

    }else {
        response = {
            pesan:"ini salah"
        }
    }

    res.json(response)
})



//NOMOR 3
//End-point "desimal" (GAMBAR 3.1)
app.post("/desimal",(req,res)=>{
    let des = Number(req.body.num)

    let bin = des.toString(2)
    let oct = des.toString(8)
    let hex = des.toString(16)  
    
    let out = {
        FROM: "DESIMAL",
        value: des,
        biner: bin,
        octal: oct,
        hexadesimal: hex
    }

    res.json(out)
})

//End-point "biner" (GAMBAR 3.2)
app.post("/biner",(req,res)=>{
    let bin = Number(req.body.num)

    let des = bin.toString(10)
    let oct = bin.toString(8)
    let hex = bin.toString(16)  
    
    let out = {
        FROM: "BINER",
        value: bin,
        desimal: des,
        octal: oct,
        hexadesimal: hex
    }

    res.json(out)
})

//End-point "octal" (GAMBAR 3.3)
app.post("/octal",(req,res)=>{
    let oct = Number(req.body.num)

    let des = oct.toString(10)
    let bin = oct.toString(2)
    let hex = oct.toString(16)  
    
    let out = {
        FROM: "OCTAL",
        value: oct,
        desimal: des,
        biner: bin,
        hexadesimal: hex
    }

    res.json(out)
})

//End-point "hexadesimal" GAMBAR (3.4)
app.post("/hexadesimal",(req,res)=>{
    let hex = Number(req.body.num)

    let des = hex.toString(10)
    let bin = hex.toString(2)
    let oct = hex.toString(8)  
    
    let out = {
        FROM: "HEXADESIMAL",
        value: hex,
        desimal: des,
        biner: bin,
        octal:oct
    }

    res.json(out)
})





//NOMOR 4
//End-point "/bmi" (GAMBAR 4.1)
app.post("/bmi",(req,res)=>{
    let tinggi = Number(req.body.tinggi)
    let berat = Number(req.body.berat)

    let bmi = berat/(tinggi**2)
    let status

    if(bmi<18.5){
        status = "kekurangan berat badan"
    }else if (bmi<=29.9){
        status = "Normal(Ideal)"
    }else if (bmi<=29.9){
        status = "Kelebihan berat badan0"
    }else{
        status = "Kegemukan(Obesitas)"
    } 

    let response = {
        tinggi: tinggi,
        berat: berat,
        bmi: bmi,
        status: status
    }

    res.json(response)
})