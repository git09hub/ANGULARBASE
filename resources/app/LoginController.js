app.controller("LoginController", function($scope,$location){     
	
	$scope.loginUser = function(user) {		 
		 // send the data to server		 
		// objectService.set(user);
		 alert("userdata--"+user.email+"--password---"+user.password);
		 
		//$location.path('/Login');			
	    };
});