myApp.controller('MessageController', function($scope, MessageFactory) {

	function getMessages(){
		MessageFactory.getMessages(function(data) {
			$scope.messages = data.data;
			console.log($scope.messages);
		})
	}

	getMessages();

	$scope.addMessage = function() {
		console.log($scope.newMessage);
		MessageFactory.addMessage($scope.newMessage, getMessages);
		$scope.newMessage = {};
	}

	$scope.addComment = function(comment, messageId) {
		comment.messageId = messageId;
		console.log(comment);
		MessageFactory.addComment(comment);
	}

});