app.controller("$watchController",function($scope){
	alert("$watchController .working");
	
	$scope.$on('$routeChangeSuccess',function(){
		alert("route change success");
		//by passing value function and listener function
		//(to be applied for every scope variable change- refreshes for every scope value change)
		/*$scope.$watch(
				//value function checks the value is changed or not
				function(scope){
					alert("value function checking returned value");
					//scope.variable=9;
					return scope.variable;
				},
				Listener function changes the value
				function(){}
					
				);*/
		//watch by passing value,listener function
		//(to be applied for one scope variable change- refreshes when specified scope value change)
		
		$scope.$watch('inputVar',
				function($scope){
						alert('value chaged!..'+$scope.inputVar);
						return $scope.inputVar;
					});
		//when the input value changed then the count will increment 
		$scope.c=0,$scope.total=0;
		
		$scope.$watch('v', function() {
	        // do something here
	        $scope.c += 1;
	    }, true);
		//count of key presses increases when any of the value changed
	    $scope.count = 0;
	    $scope.b = [{value: 1},{value: 2},{value: 3},{value: 4},{value: 5},{value: 6}];

	    $scope.$watch('b', function() {
			$scope.total=0;
	        // do something here
	        $scope.count += 1;
			angular.forEach($scope.b,function(v,i){
					$scope.total=$scope.total+Number($scope.b[i].value);
			});
			
	    }, true);
	    $scope.inputChange=0;
	    $scope.$watch('v',function(newValue,oldValue){
	    	alert(newValue+"new----old"+oldValue);
	    	if(newValue!==oldValue){
	    		$scope.inputChange +=1;
	    	}
	    });
	});
	
});

/*var $watchController = function($scope){
	alert("working");
};*/