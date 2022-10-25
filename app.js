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
const env_custom_variable = require('./env/env');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(upload.array()); 
app.use(express.static('public'));
const port = process.env.PORT || '5000';

const uName = process.env.usr 
const password = process.env.pwd
const server = process.env.ser

const MONGOURL = `mongodb+srv://${uName}:${password}@${server}/?retryWrites=true&w=majority`

mongoose.connect(MONGOURL)
  .then((result) => app.listen(port,function(){
    console.log(`Server started on Port ${port}`);
  }))
  .catch((err) => {
    console.log(err)
    mongoose.disconnect()
  });

/*
mongoose.connect(
  process.env.MONGO_URI,
  {
      user: process.env.USERNAME,
      pass: process.env.PASSWORD,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
  },
  (err) => {
      if(err) {
          console.log(err)
      } else console.log("Connected");
  });
*/
app.use('/api', parent_router); 

app.get('/test', (req,res) => console.log(req.headers))
