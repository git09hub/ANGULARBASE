
app.controller("JStudentController", function($scope,$http,objectService){     
		
	$scope.$on('$routeChangeSuccess', function() {		
		
	});
	
	$scope.saveStudent = function(student){
		alert("Student data---"+student.name);
		$scope.students={};
			students.push(student.name,student.age,student.mobile,student.address,student.email);
		/*objectService.set(student);*/
			alert(students);
		$location.path("/jviewStudents");
	};
});