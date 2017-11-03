
app.controller("HomeController", function($scope,$http){     
	$scope.data={};	
	$scope.products = ["Milk", "Bread", "Cheese"];
	$scope.array=[];
	$scope.selection=[];
	
	$scope.$on('$routeChangeSuccess', function() {		
		$scope.stateList ={};		
	});
		
	$scope.switchCountry=function(value){
		alert(value);
		if(value=='india'){
			$http.get('resources/js/india.json').success(function(data) {
		          $scope.stateList = data;
		        }).error(function(){
		        	alert(status);
		        });
		}else if(value=='us'){
			$http.get('resources/js/us.json').success(function(data) {
		          $scope.stateList = data;
		        }).error(function(){
		        	alert(status);
		        });
		}else{
			$scope.stateList ={};
		}		
	};
	
	$scope.radioCountry=function(value){
		alert(value);
		if(value=='india'){
			$http.get('resources/js/india.json').success(function(data) {
		          $scope.states = data;
		        }).error(function(){
		        	alert(status);
		        });
		}else if(value=='us'){
			$http.get('resources/js/us.json').success(function(data) {
		          $scope.states = data;
		        }).error(function(){
		        	alert(status);
		        });
		}else{
			$scope.states ={};
		}		
	};
	
	$scope.update = function(uid){
		alert(uid);		
	};
	

	$scope.addItem = function () {
        $scope.errortext = "";
        if (!$scope.addMe) {return;}
        if ($scope.products.indexOf($scope.addMe) == -1) {
            $scope.products.push($scope.addMe);
        } else {
            $scope.errortext = "The item is already in your shopping list.";
        }
    };
    
    $scope.removeItem = function (x) {
        $scope.errortext = "";
        $scope.products.splice(x, 1);
    };
    
    
    $scope.toggleSelection = function toggleSelection(employeeName) 
 	{
			var idx = $scope.selection.indexOf(employeeName);			
				if (idx > -1) {
					$scope.selection.splice(idx, 1);
					}else {
						$scope.selection.push(employeeName);
					}	
 	};	
    
 	/**To show the checked data and hide the remaining
 	$scope.videoCheck="true";
 	$scope.audioCheck="true";
 	$scope.pdfCheck="true";
 	
 	$scope.hideaip= function(){
 		$scope.audioCheck="false";
 	 	$scope.pdfCheck="false";
 	 	
 	};
 	
 	$scope.hidevip= function(){
 		$scope.videoCheck="false";
 	 	$scope.pdfCheck="false";
 	 	
 	};
 	
 	$scope.hideavp= function(){
 		$scope.audioCheck="false";
 	 	$scope.videoCheck="false";
 	 	
 	};*/
 	
 	
 	//to get the multi select in select dropdown
 	
 	$scope.example14model = [];
    $scope.example14settings = {
        scrollableHeight: '200px',
        scrollable: true,
        enableSearch: true
    };
    $scope.example14data = [{
        "label": "Alabama",
            "id": "AL"
    }, {
        "label": "Alaska",
            "id": "AK"
    }, {
        "label": "American Samoa",
            "id": "AS"
    }, {
        "label": "Arizona",
            "id": "AZ"
    }, {
        "label": "Arkansas",
            "id": "AR"
    }, {
        "label": "California",
            "id": "CA"
    }, {
        "label": "Colorado",
            "id": "CO"
    }, {
        "label": "Connecticut",
            "id": "CT"
    }, {
        "label": "Delaware",
            "id": "DE"
    }, {
        "label": "District Of Columbia",
            "id": "DC"
    }, {
        "label": "Federated States Of Micronesia",
            "id": "FM"
    }, {
        "label": "Florida",
            "id": "FL"
    }, {
        "label": "Georgia",
            "id": "GA"
    }, {
        "label": "Guam",
            "id": "GU"
    }, {
        "label": "Hawaii",
            "id": "HI"
    }, {
        "label": "Idaho",
            "id": "ID"
    }, {
        "label": "Illinois",
            "id": "IL"
    }, {
        "label": "Indiana",
            "id": "IN"
    }, {
        "label": "Iowa",
            "id": "IA"
    }, {
        "label": "Kansas",
            "id": "KS"
    }, {
        "label": "Kentucky",
            "id": "KY"
    }, {
        "label": "Louisiana",
            "id": "LA"
    }, {
        "label": "Maine",
            "id": "ME"
    }, {
        "label": "Marshall Islands",
            "id": "MH"
    }, {
        "label": "Maryland",
            "id": "MD"
    }, {
        "label": "Massachusetts",
            "id": "MA"
    }, {
        "label": "Michigan",
            "id": "MI"
    }, {
        "label": "Minnesota",
            "id": "MN"
    }, {
        "label": "Mississippi",
            "id": "MS"
    }, {
        "label": "Missouri",
            "id": "MO"
    }, {
        "label": "Montana",
            "id": "MT"
    }, {
        "label": "Nebraska",
            "id": "NE"
    }, {
        "label": "Nevada",
            "id": "NV"
    }, {
        "label": "New Hampshire",
            "id": "NH"
    }, {
        "label": "New Jersey",
            "id": "NJ"
    }, {
        "label": "New Mexico",
            "id": "NM"
    }, {
        "label": "New York",
            "id": "NY"
    }, {
        "label": "North Carolina",
            "id": "NC"
    }, {
        "label": "North Dakota",
            "id": "ND"
    }, {
        "label": "Northern Mariana Islands",
            "id": "MP"
    }, {
        "label": "Ohio",
            "id": "OH"
    }, {
        "label": "Oklahoma",
            "id": "OK"
    }, {
        "label": "Oregon",
            "id": "OR"
    }, {
        "label": "Palau",
            "id": "PW"
    }, {
        "label": "Pennsylvania",
            "id": "PA"
    }, {
        "label": "Puerto Rico",
            "id": "PR"
    }, {
        "label": "Rhode Island",
            "id": "RI"
    }, {
        "label": "South Carolina",
            "id": "SC"
    }, {
        "label": "South Dakota",
            "id": "SD"
    }, {
        "label": "Tennessee",
            "id": "TN"
    }, {
        "label": "Texas",
            "id": "TX"
    }, {
        "label": "Utah",
            "id": "UT"
    }, {
        "label": "Vermont",
            "id": "VT"
    }, {
        "label": "Virgin Islands",
            "id": "VI"
    }, {
        "label": "Virginia",
            "id": "VA"
    }, {
        "label": "Washington",
            "id": "WA"
    }, {
        "label": "West Virginia",
            "id": "WV"
    }, {
        "label": "Wisconsin",
            "id": "WI"
    }, {
        "label": "Wyoming",
            "id": "WY"
    }];
    $scope.example2settings = {
        displayProp: 'id'
    };
});

var directiveModule = angular.module('angularjs-dropdown-multiselect', []);

directiveModule.directive('ngDropdownMultiselect', ['$filter', '$document', '$compile', '$parse',

function ($filter, $document, $compile, $parse) {

    return {
        restrict: 'AE',
        scope: {
            selectedModel: '=',
            options: '=',
            extraSettings: '=',
            events: '=',
            searchFilter: '=?',
            translationTexts: '=',
            groupBy: '@'
        },
        template: function (element, attrs) {
            var checkboxes = attrs.checkboxes ? true : false;
            var groups = attrs.groupBy ? true : false;

            var template = '<div class="multiselect-parent btn-group dropdown-multiselect">';
            template += '<button type="button" class="dropdown-toggle" ng-class="settings.buttonClasses" ng-click="toggleDropdown()">{{getButtonText()}}&nbsp;<span class="caret"></span></button>';
            template += '<ul class="dropdown-menu dropdown-menu-form" ng-style="{display: open ? \'block\' : \'none\', height : settings.scrollable ? settings.scrollableHeight : \'auto\' }" style="overflow: scroll" >';
            template += '<li ng-hide="!settings.showCheckAll || settings.selectionLimit > 0"><a data-ng-click="selectAll()"><span class="glyphicon glyphicon-ok"></span>  {{texts.checkAll}}</a>';
            template += '<li ng-show="settings.showUncheckAll"><a data-ng-click="deselectAll();"><span class="glyphicon glyphicon-remove"></span>   {{texts.uncheckAll}}</a></li>';
            template += '<li ng-hide="(!settings.showCheckAll || settings.selectionLimit > 0) && !settings.showUncheckAll" class="divider"></li>';
            template += '<li ng-show="settings.enableSearch"><div class="dropdown-header"><input type="text" class="form-control" style="width: 100%;" ng-model="searchFilter" placeholder="{{texts.searchPlaceholder}}" /></li>';
            template += '<li ng-show="settings.enableSearch" class="divider"></li>';

            if (groups) {
                template += '<li ng-repeat-start="option in orderedItems | filter: searchFilter" ng-show="getPropertyForObject(option, settings.groupBy) !== getPropertyForObject(orderedItems[$index - 1], settings.groupBy)" role="presentation" class="dropdown-header">{{ getGroupTitle(getPropertyForObject(option, settings.groupBy)) }}</li>';
                template += '<li ng-repeat-end role="presentation">';
            } else {
                template += '<li role="presentation" ng-repeat="option in options | filter: searchFilter">';
            }

            template += '<a role="menuitem" tabindex="-1" ng-click="setSelectedItem(getPropertyForObject(option,settings.idProp))">';

            if (checkboxes) {
                template += '<div class="checkbox"><label><input class="checkboxInput" type="checkbox" ng-click="checkboxClick($event, getPropertyForObject(option,settings.idProp))" ng-checked="isChecked(getPropertyForObject(option,settings.idProp))" /> {{getPropertyForObject(option, settings.displayProp)}}</label></div></a>';
            } else {
                template += '<span data-ng-class="{\'glyphicon glyphicon-ok\': isChecked(getPropertyForObject(option,settings.idProp))}"></span> {{getPropertyForObject(option, settings.displayProp)}}</a>';
            }

            template += '</li>';

            template += '<li class="divider" ng-show="settings.selectionLimit > 1"></li>';
            template += '<li role="presentation" ng-show="settings.selectionLimit > 1"><a role="menuitem">{{selectedModel.length}} {{texts.selectionOf}} {{settings.selectionLimit}} {{texts.selectionCount}}</a></li>';

            template += '</ul>';
            template += '</div>';

            element.html(template);
        },
        link: function ($scope, $element, $attrs) {
            var $dropdownTrigger = $element.children()[0];

            $scope.toggleDropdown = function () {
                $scope.open = !$scope.open;
            };

            $scope.checkboxClick = function ($event, id) {
                $scope.setSelectedItem(id);
                $event.stopImmediatePropagation();
            };

            $scope.externalEvents = {
                onItemSelect: angular.noop,
                onItemDeselect: angular.noop,
                onSelectAll: angular.noop,
                onDeselectAll: angular.noop,
                onInitDone: angular.noop,
                onMaxSelectionReached: angular.noop
            };

            $scope.settings = {
                dynamicTitle: true,
                scrollable: false,
                scrollableHeight: '300px',
                closeOnBlur: true,
                displayProp: 'label',
                idProp: 'id',
                externalIdProp: 'id',
                enableSearch: false,
                selectionLimit: 0,
                showCheckAll: true,
                showUncheckAll: true,
                closeOnSelect: false,
                buttonClasses: 'btn btn-default',
                closeOnDeselect: false,
                groupBy: $attrs.groupBy || undefined,
                groupByTextProvider: null,
                smartButtonMaxItems: 0,
                smartButtonTextConverter: angular.noop
            };

            $scope.texts = {
                checkAll: 'Check All',
                uncheckAll: 'Uncheck All',
                selectionCount: 'checked',
                selectionOf: '/',
                searchPlaceholder: 'Search...',
                buttonDefaultText: 'Select',
                dynamicButtonTextSuffix: 'checked'
            };

            $scope.searchFilter = $scope.searchFilter || '';

            if (angular.isDefined($scope.settings.groupBy)) {
                $scope.$watch('options', function (newValue) {
                    if (angular.isDefined(newValue)) {
                        $scope.orderedItems = $filter('orderBy')(newValue, $scope.settings.groupBy);
                    }
                });
            }

            angular.extend($scope.settings, $scope.extraSettings || []);
            angular.extend($scope.externalEvents, $scope.events || []);
            angular.extend($scope.texts, $scope.translationTexts);

            $scope.singleSelection = $scope.settings.selectionLimit === 1;

            function getFindObj(id) {
                var findObj = {};

                if ($scope.settings.externalIdProp === '') {
                    findObj[$scope.settings.idProp] = id;
                } else {
                    findObj[$scope.settings.externalIdProp] = id;
                }

                return findObj;
            }

            function clearObject(object) {
                for (var prop in object) {
                    delete object[prop];
                }
            }

            if ($scope.singleSelection) {
                if (angular.isArray($scope.selectedModel) && $scope.selectedModel.length === 0) {
                    clearObject($scope.selectedModel);
                }
            }

            if ($scope.settings.closeOnBlur) {
                $document.on('click', function (e) {
                    var target = e.target.parentElement;
                    var parentFound = false;

                    while (angular.isDefined(target) && target !== null && !parentFound) {
                        if (_.contains(target.className.split(' '), 'multiselect-parent') && !parentFound) {
                            if (target === $dropdownTrigger) {
                                parentFound = true;
                            }
                        }
                        target = target.parentElement;
                    }

                    if (!parentFound) {
                        $scope.$apply(function () {
                            $scope.open = false;
                        });
                    }
                });
            }

            $scope.getGroupTitle = function (groupValue) {
                if ($scope.settings.groupByTextProvider !== null) {
                    return $scope.settings.groupByTextProvider(groupValue);
                }

                return groupValue;
            };

            $scope.getButtonText = function () {
                if ($scope.settings.dynamicTitle && ($scope.selectedModel.length > 0 || (angular.isObject($scope.selectedModel) && _.keys($scope.selectedModel).length > 0))) {
                    if ($scope.settings.smartButtonMaxItems > 0) {
                        //var itemsText = [];
                        var itemsText = {};
                        angular.forEach($scope.options, function (optionItem) {
                            if ($scope.isChecked($scope.getPropertyForObject(optionItem, $scope.settings.idProp))) {
                                var displayText = $scope.getPropertyForObject(optionItem, $scope.settings.displayProp);
                                var converterResponse = $scope.settings.smartButtonTextConverter(displayText, optionItem);

                                itemsText.push(converterResponse ? converterResponse : displayText);
                            }
                        });

                        if ($scope.selectedModel.length > $scope.settings.smartButtonMaxItems) {
                            itemsText = itemsText.slice(0, $scope.settings.smartButtonMaxItems);
                            itemsText.push('...');
                        }

                        return itemsText.join(', ');
                    } else {
                        var totalSelected;

                        if ($scope.singleSelection) {
                            totalSelected = ($scope.selectedModel !== null && angular.isDefined($scope.selectedModel[$scope.settings.idProp])) ? 1 : 0;
                        } else {
                            totalSelected = angular.isDefined($scope.selectedModel) ? $scope.selectedModel.length : 0;
                        }

                        if (totalSelected === 0) {
                            return $scope.texts.buttonDefaultText;
                        } else {
                            return totalSelected + ' ' + $scope.texts.dynamicButtonTextSuffix;
                        }
                    }
                } else {
                    return $scope.texts.buttonDefaultText;
                }
            };

            $scope.getPropertyForObject = function (object, property) {
                if (angular.isDefined(object) && object.hasOwnProperty(property)) {
                    return object[property];
                }

                return '';
            };

            $scope.selectAll = function () {
                $scope.deselectAll(false);
                $scope.externalEvents.onSelectAll();

                angular.forEach($scope.options, function (value) {
                    $scope.setSelectedItem(value[$scope.settings.idProp], true);
                });
            };

            $scope.deselectAll = function (sendEvent) {
                sendEvent = sendEvent || true;

                if (sendEvent) {
                    $scope.externalEvents.onDeselectAll();
                }

                if ($scope.singleSelection) {
                    clearObject($scope.selectedModel);
                } else {
                    $scope.selectedModel.splice(0, $scope.selectedModel.length);
                }
            };

            $scope.setSelectedItem = function (id, dontRemove) {
                var findObj = getFindObj(id);
                var finalObj = null;

                if ($scope.settings.externalIdProp === '') {
                    finalObj = _.find($scope.options, findObj);
                } else {
                    finalObj = findObj;
                }

                if ($scope.singleSelection) {
                    clearObject($scope.selectedModel);
                    angular.extend($scope.selectedModel, finalObj);
                    $scope.externalEvents.onItemSelect(finalObj);
                    if ($scope.settings.closeOnSelect) $scope.open = false;

                    return;
                }

                dontRemove = dontRemove || false;

                var exists = _.findIndex($scope.selectedModel, findObj) !== -1;

                if (!dontRemove && exists) {
                    $scope.selectedModel.splice(_.findIndex($scope.selectedModel, findObj), 1);
                    $scope.externalEvents.onItemDeselect(findObj);
                } else if (!exists && ($scope.settings.selectionLimit === 0 || $scope.selectedModel.length < $scope.settings.selectionLimit)) {
                    $scope.selectedModel.push(finalObj);
                    $scope.externalEvents.onItemSelect(finalObj);
                }
                if ($scope.settings.closeOnSelect) $scope.open = false;
            };

            $scope.isChecked = function (id) {
                if ($scope.singleSelection) {
                    return $scope.selectedModel !== null && angular.isDefined($scope.selectedModel[$scope.settings.idProp]) && $scope.selectedModel[$scope.settings.idProp] === getFindObj(id)[$scope.settings.idProp];
                }

                return _.findIndex($scope.selectedModel, getFindObj(id)) !== -1;
            };

            $scope.externalEvents.onInitDone();
        }
    };
}]);