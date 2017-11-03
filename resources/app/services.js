
'use strict';

/* Services */

var App = angular.module('angularApp.services', []);

var savedData = null;
App.value('version', '0.1');

App.service('objectService', function() {
	  
	  function set(data) {
		  savedData = data;
	  }
	  function get() {
		  if(savedData!=null){
			    return savedData;
			    }else{
			     return null;
			    }
	  }
	  return {
	   set: set,
	   get: get
	  };

	 });
	 
	 
/**
 * Anularjs Module for pop up timepicker
 */
//angular.module('timepickerPop', [ 'ui.bootstrap' ])
App.factory('timepickerState', function() {
  var pickers = [];
  return {
		addPicker: function(picker) {
			pickers.push(picker);
		},
		closeAll: function() {
			for (var i=0; i<pickers.length; i++) {
				pickers[i].close();
			}
		}
	};
})
.directive("timeFormat", function($filter) {
  return {
    restrict : 'A',
    require : 'ngModel',
    scope : {
      showMeridian : '=',
    },
    link : function(scope, element, attrs, ngModel) {
        var parseTime = function(viewValue) {

        if (!viewValue) {
          ngModel.$setValidity('time', true);
          return null;
        } else if (angular.isDate(viewValue) && !isNaN(viewValue)) {
          ngModel.$setValidity('time', true);
          return viewValue;
        } else if (angular.isString(viewValue)) {
          var timeRegex = /^(0?[0-9]|1[0-2]):[0-5][0-9] ?[a|p]m$/i;
          if (!scope.showMeridian) {
            timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
          }
          if (!timeRegex.test(viewValue)) {
            ngModel.$setValidity('time', false);
            return undefined;
          } else {
            ngModel.$setValidity('time', true);
            var date = new Date();
            var sp = viewValue.split(":");
            var apm = sp[1].match(/[a|p]m/i);
            if (apm) {
              sp[1] = sp[1].replace(/[a|p]m/i, '');
              if (apm[0].toLowerCase() == 'pm') {
                sp[0] = sp[0] + 12;
              }
            }
            date.setHours(sp[0], sp[1]);
            return date;
          };
        } else {
          ngModel.$setValidity('time', false);
          return undefined;
        };
      };

      ngModel.$parsers.push(parseTime);

      var showTime = function(data) {
        parseTime(data);
        var timeFormat = (!scope.showMeridian) ? "HH:mm" : "hh:mm a";
        return $filter('date')(data, timeFormat);
      };
      ngModel.$formatters.push(showTime);
      scope.$watch('showMeridian', function(value) {
        var myTime = ngModel.$modelValue;
        if (myTime) {
          element.val(showTime(myTime));
        }

      });
    }
  };
})

.directive('timepickerPop', function($document, timepickerState) {
      return {
        restrict : 'E',
        transclude : false,
        scope : {
          inputTime : "=",
          showMeridian : "=",
          disabled : "="
        },
        controller : function($scope, $element) {
          $scope.isOpen = false;
          
          $scope.disabledInt = angular.isUndefined($scope.disabled)? false : $scope.disabled;

          $scope.toggle = function() {
        	if ($scope.isOpen) {
        		$scope.close();
        	} else {
        		$scope.open();
        	}
          };
        },
        link : function(scope, element, attrs) {
          var picker = {
        		  open : function () {
        			  timepickerState.closeAll();
        			  scope.isOpen = true;
        		  },
        		  close: function () {
        			  scope.isOpen = false;
        		  }
          		  
          }
          timepickerState.addPicker(picker);
          
          scope.open = picker.open;
          scope.close = picker.close;
          
          scope.$watch("disabled", function(value) {
            scope.disabledInt = angular.isUndefined(scope.disabled)? false : scope.disabled;
          });
          
          scope.$watch("inputTime", function(value) {
            if (!scope.inputTime) {
              element.addClass('has-error');
            } else {
              element.removeClass('has-error');
            }

          });

          element.bind('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
          });

          $document.bind('click', function(event) {
            scope.$apply(function() {
           		scope.isOpen = false;
            });
          });

        },
        template : "<input type='text' class='form-control' ng-model='inputTime' ng-disabled='disabledInt' time-format show-meridian='showMeridian' ng-focus='open()' />"
            + "  <div class='input-group-btn' ng-class='{open:isOpen}'> "
            + "    <button type='button' ng-disabled='disabledInt' class='btn btn-default ' ng-class=\"{'btn-primary':isOpen}\" data-toggle='dropdown' ng-click='toggle()'> "
            + "        <i class='glyphicon glyphicon-time'></i></button> "
            + "          <div class='dropdown-menu'> "
            + "            <timepicker ng-model='inputTime' show-meridian='showMeridian'></timepicker> "
            + "           </div> " + "  </div>"
      };
});
	 
	 

App.service('sharingService',function($window){
   var KEY = 'App.SelectedValue';

        var addData = function(d) {
            var mydata = $window.sessionStorage.getItem(KEY);
            if (mydata) {
                mydata = JSON.parse(mydata);
            } else {
                mydata = [];
            }
            mydata.push(newObj);
            $window.sessionStorage.setItem(KEY, JSON.stringify(mydata));
        };

        var getData = function(){
            var mydata = $window.sessionStorage.getItem(KEY);
            if (mydata) {
                mydata = JSON.parse(mydata);
            }
            return mydata || [];
        };

        return {
            addData: addData,
            getData: getData
        }; 
});

App.service('CalcService',function(){
    alert("CalcService");        
    this.square = function (a) { return a+a};
});

App.factory('CalcService',function(){
    alert("CalcService-factory");        
    var add=function add(a,b){
        return a+b;
    }
    var subtract= function add(a,b){
        return a-b;
    }
    var multiply= function add(a,b){
        return a*b;
    }
    
});

App.service('MathService',function(){
    alert("MathService");        
});

App.factory('MathService',function(){
    alert("MathService-factory");        
    
});

App.factory('RevString',function(){
    var r=  function reverse(s) {
        var o = '';
        for (var i = s.length - 1; i >= 0; i--)
            o += s[i];
        return o;
    }

   return{
       reverseString: function reverseString(name)
       {
           return r(name);
       }
   }
 
});

//service for file upload..
app.service('fileUpload', ['$http', function ($https) {
  this.uploadFileToUrl = function(file, uploadUrl){
     var fd = new FormData();
     console.log(uploadUrl);
     fd.append('file', file);
     $https.post(uploadUrl, fd, {
        transformRequest: angular.identity,
        headers: {'Content-Type': undefined}
     }).success(function(){
        console.log('file upload success');
     }).error(function(){
        console.log('file upload failed');
     });
  }
}]);