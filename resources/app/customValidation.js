//var app = angular.module('myApp', []);
app.directive('myDirective', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attr, mCtrl) {
            function myValidation(value) {
            	//alert(value);
                if (value.indexOf("e") > -1) {
                    mCtrl.$setValidity('charE', true);
                } else {
                    mCtrl.$setValidity('charE', false);
                }
                return value;
            }
            mCtrl.$parsers.push(myValidation);
        }
    };
});

/*
app.controller("customValidation", function($scope){     
	
	$scope.$on("$routeChangeSuccess", function() {		
		alert("working in customvalidation");
		
	});	
	
	
	$scope.submitForm = function(user){
		alert("data---"+user.name);
		
	};
});*/