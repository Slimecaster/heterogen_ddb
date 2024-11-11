const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const routes = require('./routes/routes')
const mongoose = require("mongoose");
const path=require('path');

try{
    mongoose.createConnection('mongodb://localhost:27017/passuser', {connectTimeoutMS:10000})
    console.log('MongoDB Connected');
} catch(err){ console.error('MongoDB Connection Error', err)}

try{
    mongoose.createConnection('mongodb://localhost:27017/account', {connectTimeoutMS:10000})
    console.log('MongoDB Connected');
} catch(err){ console.error('MongoDB Connection Error', err)}

app.set('view engine','ejs')
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/',routes)

//Middleware
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})

