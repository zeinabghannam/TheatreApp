// Helper methods

exports.getScenesFromRequest =(req, callback) =>{
    var now = Date.now()
    var _scenes_list =[]
     //Get all scenes from the sumbitted form:
     for (var i = 1; i <= 10; i++) {
        var number = req.body["number" + i] || ""
        var script = req.body["script" + i] || ""
        var question = req.body["question" + i] || ""
        if (script)
            _scenes_list.push({ number, script, question ,date : now})
    }
    callback(_scenes_list)
}
//end