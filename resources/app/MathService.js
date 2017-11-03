app.factory('MathService', function() {
    var factory = {};
    
    factory.multiply = function(a, b) {
       return a * b;
    };
    return factory;
 });
 
 app.service('CalcService', function(){
    this.square = function(a) {
       //return MathService.multiply(a,a);
    	 return a * a;
    };
 });