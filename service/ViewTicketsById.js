
//const service_library_support = require('../helpers/service_library_support');

const bcrypt = require('bcryptjs');
// const mongoose = require('mongoose');
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/test_db", {  useCreateIndex: true });
// mongoose.Promise = global.Promise;

const login_model = require('../model/login_model');
const ticket_model = require('../model/ticket_model');


const ViewTicketsById = async (userParam) => {
    return new Promise( async ( resolve, reject ) => {
        console.log("View ticket By id section")
        console.log(userParam)
        await ticket_model.find({ _id: userParam.ticket_id }).then(function(data,error){ 
            console.log("View tickets")  
            console.log(data) 
            if(!data){
                console.log("error")
                console.log(error)
                reject({status:500 , message:error });
            }
            else
            {
                console.log("registared_ticket")
                resolve( { status:201 , message: "Vendor Details fetched Successfully" , data : data } );
            }
        })
        
    });
}

module.exports = ViewTicketsById;

