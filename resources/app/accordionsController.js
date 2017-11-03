app.controller("accordionsController",function($scope){
	alert("accordionsController .working");
	
    $( function() {

        $( "#accordion" ).accordion();
        
    } );
    
    $scope.$on("$routeChangeSuccess",function(){
        $scope.data=[
            {"q":"q1","a":"data1"},
            {"q":"q2","a":"data2"},
            {"q":"q3","a":"data3"}
        ];
        
        $scope.rData=[{"d":"d1","c":"c1"},{"d":"d2"},{"d":"d3"}];
        
        $('#accordion').append('Header').accordion();
        angular.forEach($scope.data,function(v,k){
            $('#accordion').append('<h3>'+k+'<a>-'+v.q+'</a></h3><div ng-repeat="r in rData"><p>{{r.d}}</p></div>')
            .accordion('destroy').accordion();
        });
        
        /*$('#accordion').append('Header').accordion();
        angular.forEach($scope.data,function(v,k){
            alert(k);
            $('#accordion').append('<h3>'+k+'<a>'+v.q+'</a></h3><div><p>'+v.a+'</p></div>')
            .accordion('destroy').accordion();
        });
        
        angular.forEach($scope.data,function(v,k){
            alert(k);
            
            $('#accordion').append('<h3>'+k+'<a>.'+v.q+'</a></h3><div ng-repeat="r in rData"><p ng-bind="r.d">                             </p><p ng-bind="r.c"></p></div>').accordion('destroy').accordion();
        });*/
        
         
    });
    //var acc=document.getElementByClassName("accordion");
    //alert(acc.length);
    /*var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function(){
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
      }
    }*/
});