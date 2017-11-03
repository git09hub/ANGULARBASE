app.controller("uploadToFolderController",function($scope,fileUpload){
    console.log('..uploadToFolderController');
    var url = 'http://192.168.0.52:88/AngularBASE/resources';
    $scope.uploadFile = function(){
        var file = $scope.myFile;
        
        console.log('file is-- ' + file.name);
        console.dir(file);
        
        var uploadUrl = url + "/fileUpload";
        fileUpload.uploadFileToUrl(file, uploadUrl);
     };

});