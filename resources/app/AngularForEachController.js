app.controller("AngularForEachController",function($scope){
	alert("AngularForEachController .working");
	$scope.names = [];

   $scope.persons = 
        [
        {name: 'Jimi', gender: 'male', age: 22,email : ''},
        {name: 'Peter', gender: 'male', age: 23,email : ''},
        {name: 'Bob', gender: 'male', age: 24,email : ''}
        ];  
   $scope.emails=[
                { email : 'Jimi@gmail.com'},
                { email : 'Peter@gmail.com'},
                { email : 'Bob@gmail.com'}
                ];
    var i=0;
   angular.forEach($scope.emails,
     function(value,key){  
       alert(key);
      //$scope.persons.push( $scope.persons[i].email +' : '+ value.email );
       $scope.persons[i].email=value.email;
       alert($scope.persons[i].email);
       i++;
        });

   /* for(var i=0;i<$scope.persons.length;i++){
     for(var j=0;j<$scope.emails.length;j++){
            alert($scope.emails);
            //$scope.persons[{email}]=$scope.emails.email;
        }
    }*/
});