/*
*   [ Model class regarding the Team ]   
*   @param {string} teamName - Name of the team.
*   @param {string} teamDescription - Description regarding the team.
*   @param {Date} teamCreationDate - Team creation system date.
*   @param {Date} teamClosingnDate - Team Closing system date.
*   @param {string} teamRelatedIssueId - Issue id regarding for team.
*   @param {string} assignedUserIdSet -  User id regarding for team member.
*   @param {string} teamStatus -  Status of the team [ Open/Closed ].
*   @param {string} TicketAssignedStatus -  Status of the ticket [ Not Assigned / Assigned / Closed  ].
*/
const Schema = require('../helpers/model_library_support');

const schema = new Schema.Schema({
        teamName: { type: String , required: true}, 
        teamDescription: { type: String , required: true},
        teamCreationDate: {type: Date, default: Date.now},                    
        teamClosingnDate: {type: Date, default: null}, 
        teamRelatedIssueId: { type: String, default: null }, 
        assignedUserIdSet: { type: String, default: null },
        teamStatus: { type: String, default: "Open" },
        TicketAssignedStatus: { type: String, default: "Not Assigned" }                
});


schema.set('toJSON', { virtuals: true });

module.exports = Schema.mongoose.model('team_registration_table', schema);


    
    