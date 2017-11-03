app.controller("$watchDigestApplyController",function($scope){
	alert("$watchDigestApplyController .working");
	
	$scope.data = { time : new Date() };
	
	$scope.$on('$routeChangeSuccess',function(){
		 
    	});

	$scope.updateTime = function() {
        $scope.data.time = new Date();
    };

    $scope.timeAnchor = function(){
    	$scope.data.time = new Date();
    	//if u comment below line time vll not updated
		$scope.$digest();
    	/*
    	$scope.$apply(function(){
    		$scope.data.time = new Date();
    		$scope.$digest();
    	});*/
    };
    
    document.getElementById("updateTimeButton")
		    .addEventListener('click', function() {
		    	console.log("update time clicked");
		    	alert("update time clicked");
		    	$scope.data.time = new Date();
		    	//if u comment below line time vll not updated
		    	$scope.$digest();
		});

});