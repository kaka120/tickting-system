
const bcrypt = require('bcryptjs');
const login_model = require('../model/login_model');
var ticket_model = require('../model/ticket_model');

const TicketRegistration = async (userParam) => {
    return new Promise( async ( resolve, reject ) => {
        await login_model.findOne({ userId: userParam.userId }).then(function(data){ 
            ticket_model = new ticket_model(userParam);
            ticket_model.save((error, registared_ticket) => {
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

