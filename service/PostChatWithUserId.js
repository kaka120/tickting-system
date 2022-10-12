
//const service_library_support = require('../helpers/service_library_support');

const bcrypt = require('bcryptjs');
// const mongoose = require('mongoose');
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/test_db", {  useCreateIndex: true });
// mongoose.Promise = global.Promise;

const chat_group_model = require('../model/chat_group');
const login_model = require('../model/login_model');
const ticket_model = require('../model/ticket_model');

console.log(login_model)

const PostChatWithUserId = async (userParam) => {
    return new Promise( async ( resolve, reject ) => {

        await ticket_model.findOne({ _id: userParam.ticket_chat_group_id },function(err, ticket_model){
            console.log(ticket_model)
            if (err) { 
                reject({ status:500 ,message:err  })
             }
             else
             { 
                if (ticket_model) {
                    chat_group_model.findOne({ ticket_chat_group_id: userParam.ticket_chat_group_id },function(err, chat_group){ 
                        if (err) { 
                            reject({ status:500 ,message:err  })
                         }
                         else{
                            if (chat_group) {
                                var myquery = { ticket_chat_group_id: userParam.ticket_chat_group_id };
                                var newvalues ={ "$push": { "ticket_related_comments_user_comments_object": userParam.ticket_related_comments_user_comments_object[0] } };
                                chat_group_model.updateOne(myquery, newvalues).then(function(data){
                                    if(data){
                                       console.log("sucessfully data inserted in existing data set"); 
                                        resolve( { status:201 , message: chat_group.id + " sucessfully data inserted in existing data set"  } );
                                    }
                                })
                            }
                            else
                            {
                                const chat_group = new chat_group_model(userParam);
                                chat_group.save((error, chat_group_result) => {
                                    if(error){
                                        reject({status:500,message:error});
                                    }
                                    else
                                    {
                                        update_ticket_table_chat_grp_id(userParam.ticket_chat_group_id,chat_group_result.id).then(function(data){
                                            console.log("data newly inserted in chat grp table and updated inside rticket_group table")
                                            console.log(data)
                                            resolve( { status:201 ,message: chat_group_result.id + " sucessfully data inserted" } );
                                        })
                                        .catch(function(err){
                                            reject({status:500,message:error});
                                        })
                                    }
                                });
                            }
                         }
                     })
                } else {
                    console.log(" Not Authorised User ")
                    reject({ status:401 ,message: " Not Authorised User " })
                }
                
             }
             
          })
          
        
    });
}

const update_ticket_table_chat_grp_id = async (id,id1) => {
    return new Promise( async ( resolve, reject ) => {
    var myquery = { _id: id  }; 
    var newvalues ={ "$set": { ticket_chat_group_id :  id1 } };
        await ticket_model.updateOne( myquery , newvalues,function(error,res){
            if(res.nModified===1){
                console.log("res")
                console.log(res)
                resolve(1)
            }
            else
            {
                console.log("res 1")
                console.log(res)
                reject(0)
            }
                   
        })
    })
}

module.exports = PostChatWithUserId;

