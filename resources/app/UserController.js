
app.controller("UserController", function($scope,$http,$location,objectService){     
	$scope.us={};
	
	$scope.$on('$routeChangeSuccess', function() {		
		$scope.userList ={};		
	});	
	
	$scope.orderByMe = function(c) {
		 $scope.myOrderBy=c;
		};
	
	$scope.$on('$routeChangeSuccess', function() {		
		$http.get('resources/js/users.json').success(function(response) {
	          $scope.userList = response;
	        }).error(function(){
	        	alert(status);
	        });	
	});
	
	
	//handles the submit function to add user
	 $scope.saveUser = function(user) {
		 var data="Save User"+user.firstName+"-"+user.lastName+"-"+user.email+"-"+user.address;
		 alert(data);
		 objectService.set(user);
		$location.path("/editUser");
		};
		
		
		$scope.editUser = function(u) {						  
			var data="Edit User----"+u.firstName+"-"+u.lastName+"-"+u.email+"-"+u.address;
			 alert(data);
			 //make data avail to next page
			objectService.set(u);
		/*	$location.path("/editUser");*/
			$location.path("/view");
			};
			
		$scope.sortBy = function(item) {
				 var sortItem="Sort item--"+item;
				  alert(sortItem);
				  $scope.reverse = ($scope.item === item) ? !$scope.reverse : false;
				  $scope.item = item;
				};
				
				
				
				
			/*Code for Auto focus using NG
				app.directive('focus',
						function($timeout) {
						 return {
						 scope : {
						   trigger : '@focus'
						 },
						 link : function(scope, element) {
						  scope.$watch('trigger', function(value) {
						    if (value === "true") {
						      $timeout(function() {
						       element[0].focus();
						      });
						   }
						 });
						 }
						};
						}); 		
				
				/*$scope.getFile = function(value){
					alert(value);
					if(value=='india'){
						$http.get('resources/js/india.json').success(function(data) {
					          $scope.stateList = data;
					        }).error(function(){
					        	alert(status);
					        });
					}else if(value=='us'){
						$http.get('resources/js/us.json').success(function(data) {
					          $scope.stateList = data;
					        }).error(function(){
					        	alert(status);
					        });
					}else{
						$scope.stateList ={};
					}		
				};*/	
				
	});