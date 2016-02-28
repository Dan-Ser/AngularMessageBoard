myApp.controller('LoginRegController', function($scope, $rootScope, $location, LoginRegFactory){
	// $scope.login is an event handler because it's funcionality
	// is tied to a DOM event
	$scope.error = null;

	$scope.login = function(user)
	{
		console.log(user);
		LoginRegFactory.login(user, function(response){
			console.log(response.data)
			$location.url('/dashboard');
		})
	};

	$scope.register = function(newUser)
	{
		$scope.error = null;
		if(newUser.password == newUser.confirmPassword){
			console.log(newUser);
			LoginRegFactory.register(newUser, function(response){
				$rootScope.currentUser = response.data;
				$location.url('/dashboard');
			})
		}
		else{
			$scope.error = "There was an error in your registration. Please make sure your passwords match.";
			console.log($scope.error);
		}
	}
})