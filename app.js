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

// mongoose.connect(env_custom_variable.parsed.MONGO_URI)
//   .then((result) => app.listen(port,function(){
//     console.log(`Server started on Port ${port}`);
//   }))
//   .catch((err) => {
//     console.log(err)
//     mongoose.disconnect()
//   });

app.use('/api', parent_router); 

app.get('/test', (req,res) => console.log(req.headers))
