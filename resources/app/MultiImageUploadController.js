app.controller("MultiImageUploadController",function($scope,CalcService,MathService){
	alert("Multi image upload Controller -.working");
	
	$scope.$on('$routeChangeSuccess',function(){
		 
    	});
	
	$scope.fileList = [];
    $scope.curFile;
    $scope.ImageProperty = {
        file:''
    };

    $scope.setFile = function (element) {
        $scope.fileList = [];
       // get the files
        var files = element.files;
        for(var i=0;i<files.length;i++)
        {
            $scope.ImageProperty.file = files[i];
            
            $scope.fileList.push($scope.ImageProperty);
            $scope.ImageProperty = {};
            $scope.$apply();
          
        }
    };

      
});

