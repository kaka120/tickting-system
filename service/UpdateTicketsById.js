
//const service_library_support = require('../helpers/service_library_support');

const bcrypt = require('bcryptjs');
// const mongoose = require('mongoose');
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/test_db", {  useCreateIndex: true });
// mongoose.Promise = global.Promise;

const chat_group_model = require('../model/chat_group');
const login_model = require('../model/login_model');
const ticket_model = require('../model/ticket_model');


const UpdateTicketByIdController = async (userParam) => {
    return new Promise( async ( resolve, reject ) => {
          console.log({userParam})
        
        //   var myquery = { username: userParam.username };
        //   var newvalues = { $set: { firstName:  userParam.firstName } };
        //   await login_model.updateOne( myquery, newvalues ).then(function(data){ 
        //     console.log("Ticket section updation registration")  
        //     console.log(data)  
        // })
        


    });
}

module.exports = UpdateTicketByIdController;

