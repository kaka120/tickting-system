
//const service_library_support = require('../helpers/service_library_support');

const bcrypt = require('bcryptjs');
// const mongoose = require('mongoose');
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/test_db", {  useCreateIndex: true });
// mongoose.Promise = global.Promise;

const login_model = require('../model/login_model');
const team_registration = require('../model/team_registration');


const ViewTickets = async (userParam) => {
    return new Promise( async ( resolve, reject ) => {
          //console.log(ticket_model.findOne({}))
          console.log("View Team Section")  
          await team_registration.find({}).then(function(data,error){ 
            console.log(data) 
         
            if(!data){
                console.log("error")
                console.log(error)
                reject({status:500 , message:error });
            }
            else
            {
                console.log("registared_ticket")
                resolve( { status:201 , message: "Team Details fetched Successfully" , data : data } );
            }
        
        })
    });
}

module.exports = ViewTickets;

