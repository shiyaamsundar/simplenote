const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config()

const app=express()
const port=process.env.PORT||5000;
const notesrouter = require('./router/notes');

app.use(express.json())
app.use(bodyParser.json())
app.use(cors())

app.use("/api",notesrouter)


const uri=process.env.URI;
mongoose.connect(uri,{
    useFindAndModify:false,

    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true
});

const connection=mongoose.connection;

connection.once('open',()=>{
    console.log("mongo db connected successfully");
})

app.listen(port,()=>{
    console.log(`Server is running in port:${port}`)
})