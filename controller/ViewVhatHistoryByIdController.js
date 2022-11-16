
const userService = require('../service');
module.exports =  function  register(req, res, next) {
    
    console.log("View chat history controller");
    
    let result = userService.ViewChatHistoryById(req.body)
    result.then(function (result_set) {
        console.log("Promise Resolved");
        //console.log(result_set)
        if(result_set.status===201)
            res.status(201).send(result_set)
    }).catch(function (result_set) {
        console.log(result_set)
        if(result_set.status===409)
            res.status(409).send(result_set.message)
            if(result_set.status===500)
            res.status(500).send(result_set.message)
    });

}