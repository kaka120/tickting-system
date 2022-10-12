
const bcrypt = require('bcryptjs');
// const mongoose = require('mongoose');
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/test_db", {  useCreateIndex: true });
// mongoose.Promise = global.Promise;

const team_registration = require('../model/team_registration');

console.log(team_registration)

const TeamTicketAssignment = async (userParam) => {
    console.log("Team ticket Assignment")
    return new Promise( async ( resolve, reject ) => {
        await team_registration.findOne({ teamName: userParam.teamName }).then(function(data){ 
           console.log(data)
        //    if(data){
        //        console.log("error1")
        //        console.log( data.teamName + " already registared ")
        //        reject({ status:409 ,message: data.teamName + " already registared " })
        //    }
        //    else
        //    {
        //         const registaredTeam = new team_registration(userParam);
        //         console.log("new team registration")
        //         console.log(userParam)
        //         registaredTeam.save((error, regiterUser) => {
        //             if(error){
        //                 console.log("error")
        //                 console.log(error)
        //                 reject({status:500,message:error});
        //             }
        //             else
        //             {
        //                 console.log("Done")
        //                 resolve( { status:201 ,message: regiterUser.teamName + " sucessfully registared " } );
        //             }
        //         });
                
        //    } 
            
        })
    });
}

module.exports = TeamTicketAssignment;

