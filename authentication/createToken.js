const bcrypt = require('bcryptjs');
// const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/test_db", {  useCreateIndex: true });
// mongoose.Promise = global.Promise;

const login_model = require('../model/login_model');

module.exports = function createToken(req, res, next) {
    
    console.log("Create new token");
    console.log(req.body);
    console.log(req.body.user_id)
    console.log(req.body.username)
    
    let payload = {
        user_id : req.body.user_id,
        username : req.body.username
    }

    let token;
        token = jwt.sign(payload,"config.secrets.session",{
            expiresIn : "100s"
        });

        console.log("token")
        console.log(token)
        res.status(200).send({message: { auth : true, token : token, message : req.body.message }})
        
    /*
    await login_model.findOne({ username: userParam.username }).then(function(login_model){ 
        console.log("userParam.password")
        console.log(userParam.password)
        
        var isPasswordValid = bcrypt.compareSync(userParam.password, login_model.hash);
        
        if(!isPasswordValid){
            reject({ status:401 ,message: " Not Authorised User " })
        }else{
            let payload = {
                user_id : login_model._id,
                username : login_model.username
              }
               let token;
                token = jwt.sign(payload, "config.secrets.session",{
                    expiresIn : "100s"
                });
                console.log("token")
                console.log(token)
                resolve({ status: 200 , message: { auth : true, token : token, message : "User Logged In Successfully" } } )
        } 
     })
     */
}