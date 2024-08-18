// here cors() is a midleware function it can either declaare as accessible by all else with admin only in index.js(simply search cors midleware in express)
const express = require('express')

const booksRoutes=require('./routes/booksRoutes')
const authorsRoutes = require('./routes/authorsRoutes')
const mongoose = require('mongoose');
const cors = require('cors')

const app = express()
const port = 3000

app.use('/books',cors(),booksRoutes )
app.use('/authors',authorsRoutes )

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




main().then(()=>console.log("connected")).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://sarathkumarpk1996:bT3jaGAK4lK2qgbA@cluster0.xricy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');


}