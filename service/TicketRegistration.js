
//const service_library_support = require('../helpers/service_library_support');
const bcrypt = require('bcryptjs');
// const mongoose = require('mongoose');
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/test_db", {  useCreateIndex: true });
// mongoose.Promise = global.Promise;

const login_model = require('../model/login_model');
const ticket_model = require('../model/ticket_model');

const LoginRegsistration = async (userParam) => {
    return new Promise( async ( resolve, reject ) => {
        //console.log(userParam)
        await login_model.findOne({ _id: userParam.username }).then(function(data){ 
            console.log("Ticket registration")  
            console.log(userParam) 
            //console.log(userParam) 

            const ticket_model_1 = new ticket_model(userParam);
                //console.log("ticket_model_1")
                //console.log(ticket_model_1) 
                ticket_model_1.save((error, registared_ticket) => {
                if(error){
                    console.log("error")
                    console.log(error)
                    reject({status:500,message:error});
                }
                else
                {
                    //console.log("registared_ticket")
                    resolve( { status:200 ,message: registared_ticket.id + " sucessfully registared " } );
                }
            });
        })
    });
}

module.exports = LoginRegsistration;

