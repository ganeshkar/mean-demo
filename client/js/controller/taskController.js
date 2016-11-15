app.controller('taskController', ['$scope', '$resource', function($scope, $resource) {
	
	var Task = $resource('/api/tasks');

	$scope.tasks = []

	Task.query(function(results){
		$scope.tasks = results;
	})	

	$scope.addNewTask = function(){
		if($scope.newTask != ''){
			var task = new Task();
			task.name = $scope.newTask;
			task.$save(function(result){
				console.log(result);
				$scope.tasks.push(result);
				$scope.newTask = '';
			});
		}		
	}		
}]);