'use strict';

var angularApp = {};

var app = angular.module('angularApp', ['ngImgCrop' , 'ngRoute', 'angularApp.services', 'ui.router']);//,'angularjs-dropdown-multiselect'

app.config(['$routeProvider', function ($routeProvider) {
	//here navigations are configured
	$routeProvider.
		when('/home', {
			templateUrl: 'pages/home.html',
			controller: 'HomeController'
		});

	$routeProvider.
		when('/login', {
			templateUrl: 'pages/login.html',
			controller: 'LoginController'
		});

	$routeProvider.
		when('/user', {
			templateUrl: 'pages/user.html',
			controller: 'UserController'
		});


	$routeProvider.
		when('/editUser', {
			templateUrl: 'pages/userEdit.html',
			controller: 'editController'
			//controller: 'UserController'
		});

	$routeProvider.
		when('/view', {
			templateUrl: 'pages/userView.html',
			controller: 'UserController'
		});

	$routeProvider.
		when('/jaddStudent', {
			templateUrl: 'pages/addStudent.html',
			controller: 'JStudentController'
		});

	$routeProvider.
		when('/jviewStudents', {
			templateUrl: 'pages/viewStudents.html',
			controller: 'UserController'
		});

	$routeProvider.
		when('/workOut', {
			templateUrl: 'pages/workOut.html',
			controller: 'workOutController'
		});

	$routeProvider.
		when('/customValidation', {
			templateUrl: 'pages/customValidation.html'
			//controller: 'customVlidation'
		});

	$routeProvider.
		when('/ngcss', {
			templateUrl: 'pages/ngcss.html',
			controller: 'ngcssController'
		});

	$routeProvider.
		when('/multiRadio', {
			templateUrl: 'pages/multiRadio.html',
			controller: 'multiRadioController'
		});

	$routeProvider.when('/$watch', {
		templateUrl: 'pages/$watch.html',
		controller: '$watchController'
	});
	//$watchDigestApply

	$routeProvider.when('/$watchDigestApply', {
		templateUrl: 'pages/$watchDigestApply.html',
		controller: '$watchDigestApplyController'
	});
	//services
	$routeProvider.when('/services', {
		templateUrl: 'pages/Services.html',
		controller: 'ServicesController'
	});
	//multi Image Upload
	$routeProvider.when('/multiImgUpload', {
		templateUrl: 'pages/MultiImageUpload.html',
		controller: 'MultiImageUploadController'
	});

	//Angular For Each
	$routeProvider.when('/AngularForEach', {
		templateUrl: 'pages/AngularForEach.html',
		controller: 'AngularForEachController'
	});


	///accordions
	$routeProvider.when('/accordions', {
		templateUrl: 'pages/Accordions.html',
		controller: 'accordionsController'
	});
	//charts and graphs
	$routeProvider.when('/charts', {
		templateUrl: 'pages/Charts&Graphs.html',
		controller: 'chartsngraphsController'
	});

	//modal
	$routeProvider.when('/modal', {
		templateUrl: 'pages/Modal.html',
		controller: 'modalController'
	});

	//time date pickers
	$routeProvider.when('/timeDate', {
		templateUrl: 'pages/TimeDate.html',
		controller: 'timeDateController'
	});

	$routeProvider.when('/imgSlider', {
		templateUrl: 'pages/ImgSlider.html',
		controller: 'imgSliderController'
	});

	$routeProvider.when('/checkList', {
		templateUrl: 'pages/CheckList.html',
		controller: 'checkListController'
	});

	$routeProvider.when('/shareBetweenPages', {
		templateUrl: 'pages/ShareBetweenPages.html',
		controller: 'shareBetweenPagesController'
	});
	$routeProvider.when('/sharedBetweenPages', {
		templateUrl: 'pages/SharedData.html',
		controller: 'sharedPageController'
	});
	//ngMultiSelected
	$routeProvider.when('/ngMultiSelected', {
		templateUrl: 'pages/NgMultiSelected.html',
		controller: 'ngMultiSelectedController'
	});

	//image compression test
	$routeProvider.when('/imageCompression', {
		templateUrl: 'pages/ImageCompression.html',
		controller: 'ImageCompressionController'
	});

	//ngImageCompression
	$routeProvider.when('/AngularImageCompression', {
		templateUrl: 'pages/AngularImageCompression.html',
		controller: 'AngularImageCompressionController'
	});

	//nestedFilters
	$routeProvider.when('/NestedFilters', {
		templateUrl: 'pages/NestedFitlers.html',
		controller: 'nestedFilterController'
	});

	$routeProvider.when('/imageCrop', {
		templateUrl: 'pages/ImageCrop.html',
		controller: 'imageCropController'
	});

	//uploadToFolder
	$routeProvider.when('/uploadToFolder', {
		templateUrl: 'pages/UploadToFolder.html',
		controller: 'uploadToFolderController'
	});

	//components
	$routeProvider.when('/components', {
		templateUrl: 'pages/Components.html',
		controller: 'componentsController'
	});

	$routeProvider.otherwise({
		redirectTo: '/home'
	});

}]);
