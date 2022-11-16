
const bcrypt = require('bcryptjs');

const login_model = require('../model/login_model');

const team_registration_model = require('../model/team_registration');

const shortid = require("shortid");


const TeamRegistration = async (userParam) => {
    console.log({userParam})
    console.log("Issue resolved team registration")
    return new Promise( async ( resolve, reject ) => {
        await login_model.findOne({ userId: userParam.userId }).then(function(data){ 
           console.log(data)
           if(!data){
               console.log( data.userId + " Not Authorized to create team ")
               reject({ status:409 ,message: data.userName + " Not Authorized to create team  " })
           }
           else
           {
                console.log({ userParam })
                console.log(data.userName)
               
                const registaredTeam = new team_registration_model(userParam);
                registaredTeam.teamID = shortid.generate() + userParam.userName.slice(0,2); 
                registaredTeam.userId = userParam.userId; 
                console.log("new team registration")
                console.log({registaredTeam})
                registaredTeam.save((error, registaredTeam) => {
                    if(error){
                        console.log("error")
                        console.log(error)
                        reject({status:500,message:error});
                    }
                    else
                    {
                        console.log("Done")
                        resolve( { status:201 ,message: registaredTeam.teamID + " sucessfully created " } );
                    }
                });
                
           }
            
        })
    });
}

module.exports = TeamRegistration;

