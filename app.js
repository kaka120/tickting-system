const express = require('express');

const bodyParser = require('body-parser');

var multer = require('multer');

const mongoose = require('mongoose');

 mongoose.set('useNewUrlParser', true);
 mongoose.set('useFindAndModify', false);
 mongoose.set('useCreateIndex', true);
 mongoose.set('useUnifiedTopology', true);

var upload = multer();
const app= express() 
var cors = require('cors')
// Add headers
app.use(cors())
const parent_router = require('./routes/parent_router');
require('dotenv').config()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(upload.array()); 
app.use(express.static('public'));

const uName = process.env.usr 
const password = process.env.pwd
const server = process.env.ser

const port = process.env.port || 8080 ;

const MONGOURL = `mongodb+srv://${uName}:${password}@${server}/?retryWrites=true&w=majority`

mongoose.connect(MONGOURL)
  .then((result) => app.listen(port,function(){
    console.log(`Server started on Port ${port}`);
  }))
  .catch((err) => {
    console.log(err)
    mongoose.disconnect()
  });

app.use('/api', parent_router); 


app.get('/test', (req,res) => console.log(MONGOURL))
