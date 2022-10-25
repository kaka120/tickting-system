
const bcrypt = require('bcryptjs');
const login_model = require('../model/login_model');
const ticket_model = require('../model/ticket_model');
const shortid = require("shortid");

const TicketRegistration = async (userParam) => {
    return new Promise( async ( resolve, reject ) => {
        await login_model.findOne({ userId: userParam.userId }).then(function(data){ 
            ticket_model1 = new ticket_model(userParam);
            ticket_model1.ticketID = shortid.generate() + userParam.userName.slice(0,2); 
            ticket_model1.save((error, registared_ticket) => {
                if(error){
                    reject({status:500,message:error});
                }
                else
                {
                    resolve( { status:200 ,message: registared_ticket.id + " sucessfully registared " } );
                }
            });
        })
    });
}

module.exports = TicketRegistration;

