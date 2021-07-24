const express = require('express')
const app = express() //app est une instance d'express
const mongoose = require('mongoose')
const cors=require('cors')
const bodyParser=require('body-parser')
require('dotenv').config({path: 'config/.env'})

app.use(express.json())
app.use(bodyParser.urlencoded({
    parameterLimit: 100000,
    limit: '500000mb',
    extended: true
}));
app.use(cors())
mongoose.connect(process.env.URI, { useUnifiedTopology: true, useNewUrlParser: true ,useUnifiedTopology: true,useFindAndModify:false,connectTimeoutMS: 10000,poolSize: 10,writeConcern: {j: true} } ,
    (err) => {
        if (err){ throw err;}

            console.log('connect to db...')
    })
app.use(cors())
app.use('/post',require('./routes/post'))
app.use('/register',require('./routes/register'))
app.use('/registeremployer',require('./routes/registerEmployer'))
app.use('/login'   ,require('./routes/login'))
app.use('/loginemp'   ,require('./routes/loginemp'))
app.use('/categorie'   ,require('./routes/categorie'))




//app.use(express.json())
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`server is running on PORT: ${PORT}`));


