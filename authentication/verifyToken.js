
//const service_library_support = require('../helpers/service_library_support');
/*
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/test_db", {  useCreateIndex: true });
mongoose.Promise = global.Promise;

const login_model = require('../model/login_model');
const ticket_model = require('../model/ticket_model');


const verifyToken = async (userParam) => {
    return new Promise( async ( resolve, reject ) => {
          console.log(userParam)
        await login_model.findOne({ username: userParam.username }).then(function(data){ 
            console.log("Token varify section")  
            console.log(data) 
           
          
        })
    });
}
module.exports = verifyToken;
*/

var express = require('express');
var jwt = require('jsonwebtoken');

var VerifyToken = express.Router();


VerifyToken.use(function(req, res, next){
    console.log("Varify token section")
    console.log(req.headers)
     console.log("Varify token section")
    if(!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      return res.status(401).send('Unauthorized request')    
    }
    if(!token){
        return res.status(403).json({auth: false, message: "No Token"});
    }
    jwt.verify(token, "config.secrets.session", function(err, decoded){
        if(err){
            console.log(err);
            return res.status(401).json({auth: false, message: "Not An Authorized User"});
        }
        req.body.userId = decoded.userId;
        req.body.userName = decoded.userName;
        next();
    });
    
});

module.exports = VerifyToken;

