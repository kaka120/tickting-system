
const userService = require('../service/parent_service');
module.exports =  function  UpdateTicketByIdController(req, res, next) {
    
    console.log("Update controller");
    console.log(req.body);
    
    let result = userService.UpdateTicketById(req.body)
    result.then(function (result_set) {
        console.log("Promise Resolved");
        console.log(result_set)
         if(result_set.status === 201)
         res.status(201).send(result_set)
        
    }).catch(function (result_set) {
         if(result_set.status===500)
             res.status(500).send(result_set.message)
    });
    
}