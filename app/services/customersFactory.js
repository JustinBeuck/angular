(function() {
   var customersFactory = function() {
      var customers = [
            {
                  id: 1,
                  joined: '2001-02-11', 
                  name: 'James', 
                  city: 'Boston', 
                  orderTotal: '100.11',
                  order: [
                     {
                        id: 1,
                        product: 'Shoes',
                        total: '100.11'
                     }
                  ]
               },

            {
                  id: 1,
                  joined: '2014-10-07', 
                  name: 'Alfred', 
                  city: 'Cleveland', 
                  orderTotal: '81.9946',
                  order: [
                     {
                        id: 1,
                        product: 'hat',
                        total: '94.22'
                     }
                  ]
               },
               {
                  id: 1,
                  joined: '2022-11-12', 
                  name: 'Bart', 
                  city: 'Austin', 
                  orderTotal: '403.26',
                  order: [
                     {
                        id: 1,
                        product: 'Headphones',
                        total: '202.96'
                     }
                  ]
               },
               {
                  id: 1,
                  joined: '2011-04-02', 
                  name: 'Paul', 
                  city: 'Pleasentville', 
                  orderTotal: '23.50',
                  order: [
                     {
                        id: 1,
                        product: 'kindle',
                        total: '23.50'
                     }
                  ]
               }
            ];

            var factory = {};
            factory.getCustomers = function() {
               return customers;
            };
            factory.getCustomers = function(customerId) {
            for (var i=0, len=customers.length;i<len;i++) {
               if(customers[i].id === parseInt(customerId)) {
                  $scope.orders = $scope.customers[i].orders;
                  return customers[i];
               }
            }
            return {};
            };

            return factory;
         };

         angular.module('customersApp').factory('customersFactory', customersFactory);

}());



