const userService = require('../service/parent_service');
module.exports = function  TicketToTeamAssignmentController(req, res, next) {    
    let result = userService.TicketToTeamAssignment(req.body)
    result.then(function (result_set) {
        if(result_set.status===200)
            res.status(201).send(result_set.message)
        
    }).catch(function (result_set) {
        if(result_set.status===401)
            res.status(401).send(result_set.message)
        if(result_set.status===500)
            res.status(500).send(result_set.message)
    });
}
