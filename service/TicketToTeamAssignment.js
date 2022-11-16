
const bcrypt = require('bcryptjs');
const login_model = require('../model/login_model');
const ticket_model = require('../model/ticket_model');
const team_registration = require('../model/team_registration');
const shortid = require("shortid");

const TicketToTeamAssignment = async (userParam) => {
    return new Promise( async ( resolve, reject ) => {
        await login_model.findOne({ userId: userParam.userId }).then(function(data){ 
            console.log("Ticket to team assignment")
            console.log({userParam})
            // const ticket_model1 = new ticket_model(userParam);
            // ticket_model1.ticketID = shortid.generate() + userParam.userName.slice(0,2); 
            // ticket_model1.save((error, registared_ticket) => {
            //     if(error){
            //         reject({status:500,message:error});
            //     }
            //     else
            //     {
            //         resolve( { status:200 ,message: registared_ticket.id + " sucessfully registared " } );
            //     }
            // });

        })
    });
}

module.exports = TicketToTeamAssignment;

