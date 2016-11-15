var express = require('express'),
	app     = express(),
	mongoose = require('mongoose'),
	taskController = require('./server/controller/task-controller'),
	bodyparser = require('body-parser');


mongoose.connect('mongodb://localhost:27017/mean-demo')

app.use(bodyparser())

app.get('/', function (req, res){
	res.sendFile(__dirname+'/client/views/index.html')
})

app.use('/js', express.static(__dirname+'/client/js'))

app.post('/api/tasks', taskController.createTask)

app.get('/api/tasks', taskController.list)

app.listen(8888);
console.log('Server is listening on [ 8888 ] port');