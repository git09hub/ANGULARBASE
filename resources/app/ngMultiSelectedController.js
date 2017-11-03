//ngMultiSelected
app.controller("ngMultiSelectedController",function($scope){

alert('ngMultiSelected');


$scope.values=  [
   {id:1, name:"value1" }, 
   {id:2, name:"value2" }, 
   {id:3, name:"value3" },
   {id:4, name:"value4" },
   {id:5, name:"value5" },
   {id:6, name:"value6" }
   ];
$scope.selectedValues= [
			{id:2, name:"value2" }, 
			{id:3, name:"value3" }
			];



});