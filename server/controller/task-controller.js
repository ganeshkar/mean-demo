var Task = require('../model/task')

module.exports.createTask = function(req, res){
	var task = new Task(req.body);
	task.save(function(err, result){
		res.json(result);
		res.end();
	});
}

module.exports.list = function(req, res){
	Task.find({"_id" : "580396f5e4d58a11c3bc0d07"}, function( err, results){
		res.json(results);
		res.end();
	})
}