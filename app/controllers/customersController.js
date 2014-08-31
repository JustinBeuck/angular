(function() {

   var customersController = function ($scope, customersFactory){
       $scope.sortBy= 'name';
       $scope.reverse= false;
       $scope.customers = [];

       function init() {
         $scope.customers = customersFactory.getCustomers();
       }

       init();

         $scope.doSort= function(propName){
             $scope.sortBy=propName;
             $scope.reverse=!$scope.reverse;
         };
      };


         customersController.$inject = ['$scope', 'customersFactory'];

         angular.module('customersApp')
         .controller('customersController', customersController);
}());

