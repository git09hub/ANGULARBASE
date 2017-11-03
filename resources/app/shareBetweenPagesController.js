app.controller("shareBetweenPagesController",function($scope,sharingService, $location){
    alert("----");
    $scope.dataToShare = [];
    $scope.shareData = function (myValue) {
        alert(myValue);
        $scope.dataToShare = myValue;
        sharingService.addData($scope.dataToShare);
        window.location.href = "#/sharedBetweenPages";
    }
});


app.controller("sharedPageController",function($scope,sharingService){
    alert("----");
    $scope.sharedData = sharingService.getData();
    alert("data from other ctrl"+$scope.sharedData);
    
});

