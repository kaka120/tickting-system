
const routes_request = require('../helpers/routing_library_support');
const parent_controller = require('../controller/controller');
const VerifyToken = require('../authentication/verifyToken');
const CreateToken = require('../authentication/createToken');

console.log("Parent Router");

routes_request.post('/register',parent_controller.LoginRegistrationController);
routes_request.post('/authentication',parent_controller.AuthenticationController);
routes_request.post('/ticketregistration', VerifyToken, parent_controller.TicketRegistrationRegistrationController);
routes_request.post('/viewtickets',  VerifyToken, parent_controller.ViewTicketsController);
routes_request.post('/viewticketbyid',VerifyToken, parent_controller.ViewTicketByIdController);
routes_request.post('/updatebyid',VerifyToken, parent_controller.UpdateTicketByIdController); //Need to work on future .. Need a plan

routes_request.post('/postchatwithusrid',VerifyToken, parent_controller.PostChatWithUserIdController);
routes_request.post('/viewchathistory', VerifyToken, parent_controller.ViewChatHistoryByIdController);

/* Team section related API */
routes_request.post('/teamregistration', VerifyToken, parent_controller.TeamRegistrationController);
routes_request.post('/viewteam', parent_controller.ViewTeamController);
routes_request.post('/editteam', parent_controller.EditTeamController);
/* Team section related API */

/* Ticket assignment to the ticket related API */
routes_request.post('/tickettoteam',  parent_controller.TicketToTeamAssignment);
/* Ticket assignment to the ticket related API */

module.exports = routes_request;
