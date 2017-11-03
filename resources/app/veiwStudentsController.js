app.controller("viewStudentsController", function($scope,objectService){
	
	$scope.$on('$routeChangeSuccess', function() {
		$scope.student=objectService.get();
		
		});
	  	 
});