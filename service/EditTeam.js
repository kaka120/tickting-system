
//const service_library_support = require('../helpers/service_library_support');

const bcrypt = require('bcryptjs');
// const mongoose = require('mongoose');
// mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://admintest:admintest@cluster0.y02b6.mongodb.net/test_db", {  useCreateIndex: true });
// mongoose.Promise = global.Promise;



const team_model = require('../model/team_registration');


const UpdateTicketByIdController = async (userParam) => {
    console.log("Edit team" + userParam) 
    console.log( team_model )
    return new Promise( async ( resolve, reject ) => {
           console.log(userParam)
           var myquery = { username: userParam.username };
           var newvalues = { $set: { firstName:  userParam.firstName } };
        //    await team_model.updateOne( myquery, newvalues ).then(function(data){ 
        //      console.log("Ticket section updation registration")  
        //      console.log(data)  
        // })

    });
}

module.exports = UpdateTicketByIdController;

