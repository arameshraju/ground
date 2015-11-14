/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


app.controller('homeCtrl', ['$scope','$http', function ($scope, $http) {
     $scope.lstForms=[{id:1,frmDB:'Dash Board',slted:'active',Show:true},
      {id:2,frmDB:'Master Creation',slted:'',Show:true},
      {id:3,frmDB:'Client Master',slted:'',Show:true},
      {id:4,frmDB:'Reports',slted:'',Show:true}];
$scope.divSelect=1;
        $scope.divShow=function(vId){
            $scope.divSelect=vId;
            angular.forEach($scope.lstForms,function(l){
               if(angular.equals(vId,l.id)){
                   l.slted='active';
               }else{
                   l.slted='';
               } 
               
            });
        };

  }]);