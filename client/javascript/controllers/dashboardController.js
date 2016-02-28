myApp.controller('DashboardController', function($scope, $location, $http, DashboardFactory) {

	DashboardFactory.loginCheck(function(response){
		console.log(response);
		if(!response.data){
			$location.url('/');
		}

	})

	function getMessages(){
		DashboardFactory.getMessages(function(data) {
			$scope.messages = data.data;
			console.log($scope.messages);
		})
	}

	getMessages();

	$scope.addMessage = function() {
		console.log($scope.newMessage);
		DashboardFactory.addMessage($scope.newMessage, getMessages);
		$scope.newMessage = {};
	}

	$scope.addComment = function(comment, messageId) {
		comment.messageId = messageId;
		console.log(comment);
		DashboardFactory.addComment(comment);
	}

	$scope.logout = function() {
		$http.post("/logout").then(function(){
			$location.url("/");
		})
	}

});