//load the data of particular user
app.controller("editController", function($scope,objectService){
	
	$scope.$on('$routeChangeSuccess', function() {
		$scope.u=objectService.get();
		
		});
	  	 
});