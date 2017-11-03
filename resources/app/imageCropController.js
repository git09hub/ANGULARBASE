app.controller("imageCropController",function($scope){
    console.log('imageCropController....');

    $scope.myImage = '';
    $scope.myCroppedImage = '';

    $scope.uploadFile = function(file) {
        if (file) {
            // ng-img-crop
            var imageReader = new FileReader();
            imageReader.onload = function(image) {
                $scope.$apply(function($scope) {
                    $scope.myImage = image.target.result;
                    console.log('............$scope.myImage.............'+$scope.myCroppedImage);
                });
            };
            imageReader.readAsDataURL(file);
        }
    };
});