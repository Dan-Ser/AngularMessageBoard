myApp.controller('EditController', function($scope, $routeParams, MessageFactory) {
	
	$scope.param = $routeParams.id;

	function findMessage(){
		console.log($scope.param)
		MessageFactory.findMessage($scope.param, function(data){
			$scope.message = data.data;
			console.log($scope.message);
		});
	}	

	findMessage();

	$scope.editMessage = function(info){
		console.log(info);
		MessageFactory.editMessage(info);
	}
});