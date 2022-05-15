const express = require("express")
const app = express()

app.set("view engine", "ejs")
app.use(express.json())
app.use(express.static("public"))

app.all('*', function (req, res, next) {
    let date = new Date;
    console.log(`[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}] ${req.method} request for ${req.url}`)
    next()
})


app.get("/", (req, res) => {
    res.render("index")
})

app.get("/apikey", (req, res) => {
    res.json(process.env.APIKEY)
})


app.listen(process.env.PORT || 80, () => {
    console.log(`Server running on Port ${process.env.PORT || 80}`)
})