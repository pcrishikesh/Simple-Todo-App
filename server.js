const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.set('view engine', 'ejs')

let database = [
    // pushed data

]

app.get("/", (req,res) => {
    res.send("hello")
})

app.get("/todo", (req,res) => {
    res.render('index' ,{database})

})


app.post("/todo", (req,res) => {
    let data = req.body.work

    database.push(data)
    res.redirect("/todo")
})

app.post("/todo/delete", (req,res) => {
    let li = +req.body.li
    database.pop([li])
    res.redirect("/todo")

})

app.listen(port, () => {
    console.log("server is running");
})