app.controller("ServicesController",function($scope,CalcService,MathService){
	alert("ServicesController -.working");
	
	$scope.$on('$routeChangeSuccess',function(){
	   alert(CalcService.square(2));	 
    	});
	$scope.result;
	$scope.square = function() {
    	alert("data..."+$scope.number);
    	$scope.calcServiceResult = CalcService.square($scope.number);
    	$scope.mathServiceResult = MathService.multiply($scope.number,$scope.number);
    };
    
    $scope.add = function(){
        alert('add...a'+$scope.a+'...b...'+$scope.b);
        $scope.addResult= CalcService.add($scope.a,$scope.b);
    }
});



 
 