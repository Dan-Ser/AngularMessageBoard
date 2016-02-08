myApp.factory('MessageFactory', function($http) {
	var factory = {};

	factory.getMessages = function(callback){
		$http.get('/message').then(function(output) {
			callback(output);
		})
	}

	factory.addMessage = function(message){
		console.log(message);
		$http.post('/message', message)
	}

	factory.findMessage = function(id, callback){
		console.log(id);
		$http.post('/one_message', {'id': id}).then(function(output) {
			callback(output);
		});
	}

	factory.editMessage = function(info){
		console.log(info);
		$http.post('/editMessage', info);
	}

	factory.addComment = function(comment){
		console.log(comment);
		$http.post('/addComment', comment)
	}

	return factory;
	
});

// myApp.factory('customerFactory', function($http) {
// 	var factory = {};
	
// 	factory.getCustomers = function(callback) {
// 		$http.get('/customers').then(function(output) {
// 			callback(output);
// 		})
// 	}

// 	factory.addCustomer = function(data, callback) {
// 		$http.get('/customers').then(function(output) {
// 			var customers = output.data;

// 			if (customers.length == 0) {
// 				$http.post('/customers', data).then(callback);
// 			} else {
// 				console.log(data);
// 				for(var i = 0; i <customers.length; i++) {
// 					if(customers[i].name == data.name) {
// 						alert("You can't use that name!");
// 						return;
// 					}
// 				}
// 			}
// 			$http.post('/customers', data).then(callback);
// 		});
// 	}

// 	factory.deleteCustomer = function(data, callback) {
// 		$http.delete('/customers/'+data._id).then(callback);
// 	}
// 	return factory;
// });