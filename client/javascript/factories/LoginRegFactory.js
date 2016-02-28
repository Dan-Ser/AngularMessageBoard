myApp.factory('LoginRegFactory', function($http) {
	var factory = {};
	var user = {};

	factory.login = function(user, callback){
		console.log("inside factory.login")
		console.log(user);
		$http.post('/login', user).then(function(response){
			console.log(response);
			callback(response);
		});
	}

	factory.register = function(user, callback){
		console.log(user);
		$http.post('/register', user).then(function(response){
			console.log(response);
			callback(response);
		});
	}

	return factory;
})