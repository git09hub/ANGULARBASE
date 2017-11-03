app.controller('componentsController',function(){
  alert("componentsController working");
});
//
// app.component("componentView",{
//       template: '<span>component display!</span>'
// });


app.component("componentView",{
      templateUrl: './pages/componentTemplate.html'
});
