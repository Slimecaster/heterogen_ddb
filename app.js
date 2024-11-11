const express = require('express')
const app = express()
const port = 3000
const routes = require('./routes/routes')
const mongoose = require("mongoose");

try{
    mongoose.createConnection('mongodb://localhost:27017/passuser', {connectTimeoutMS:10000})
    console.log('MongoDB Connected');
} catch(err){ console.error('MongoDB Connection Error', err)}

try{
    mongoose.createConnection('mongodb://localhost:27017/account', {connectTimeoutMS:10000})
    console.log('MongoDB Connected');
} catch(err){ console.error('MongoDB Connection Error', err)}


app.use('/',routes)

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})

