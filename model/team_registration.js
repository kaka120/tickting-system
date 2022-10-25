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
        teamID: { type: String , required: true},                  // Auto Name assignment 
        teamDescription: { type: String , required: true},           // Team description
        teamCreationDate: {type: Date, default: Date.now},           //Team creation default Date         
        teamClosingnDate: {type: Date, default: null},               //Team closing date
        teamRelatedIssueId: { type: String, default: null },          //Team related issue id after the team is created on the time of ticket created
        assignedUserIdSet: { type : Array , "default" : [] },           // User group id 
        teamStatus: { type: String, default: "Open" },                // Team status OPEN / CLOSED
        TicketAssignedStatus: { type: String, default: "Not Assigned" } //Need to think assgned / not assigned             
});


schema.set('toJSON', { virtuals: true });

module.exports = Schema.mongoose.model('team_registration_table', schema);


    
    