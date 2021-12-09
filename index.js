const dotenv = require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
const path = require("path")
const port = process.env.PORT || 9000

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname,"client/build")))

app.use("/api/*",(_,res)=>{
    res.json({data:"API Data Served!"})
})

app.listen(port,()=>{
    console.log(`Server is on port ${port}`)
})

app.use("*",(_,res)=>{
    res.sendFile(path.join(__dirname,"client/build","index.html"))
})

// apiKey = 93848903844 BAD DON'T DO THIS
// dbpw = "abc123" USE ENV VARS!

// console.log("It's alive!")
// console.log(__dirname)
// console.log(__filename)
// console.log(process.env.USERNAME)  //environment variables
// console.log(process.env.APIKEY)
// console.log(process.env.PORT)
// console.log(process.env.DBPASS)