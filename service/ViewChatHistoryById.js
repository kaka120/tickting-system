
//const service_library_support = require('../helpers/service_library_support');

const bcrypt = require('bcryptjs');
// const mongoose = require('mongoose');
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/test_db", {  useCreateIndex: true });
// mongoose.Promise = global.Promise;

const chat_group_model = require('../model/chat_group');
const login_model = require('../model/login_model');
const ticket_model = require('../model/ticket_model');


const ViewChatHistoryById = async (userParam) => {
    return new Promise( async ( resolve, reject ) => {
          console.log("Chat history section");
          console.log(userParam)
          await chat_group_model.find({ ticket_chat_group_id : userParam.id }).then(function(data,error){ 
            console.log("View chat history tickets")  
            console.log(data) 
            if(!data){
                console.log("error")
                console.log(error)
                reject({status:500 , message:error });
            }
            else
            {
                console.log("registared_ticket")
                if(data[0])
                resolve( { status:201 , message: "Chat Details fetched Successfully" , data : data[0].ticket_related_comments_user_comments_object } );
                else
                resolve( { status:201 , message: "Chat Details fetched Successfully" , data : []} );
            }
        })
        .catch(error=>{
            console.log("error1")
            console.log(error)
            reject({status:500 , message:error });
        })


    });
}

module.exports = ViewChatHistoryById;

