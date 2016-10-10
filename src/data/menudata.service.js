(function(){
        'use strict';
        
        angular.module('Data')
                .service('MenuDataService', MenuDataService)
                .constant('BasePath', 'https://davids-restaurant.herokuapp.com');
        
        MenuDataService.$inject = ['$http', 'BasePath'];
        function MenuDataService($http, BasePath){
                var service = this;
                
                service.getAllCategories = function(){
                        return $http({
                                method: 'GET',
                                url: BasePath +'/categories.json'
                        });
                };
                
                service.getItemsForCategory =function(categoryShortName){
                        return $http({
                                method: 'GET',
                                url: BasePath + '/menu_items.json?category=' + categoryShortName                                
                        });
                };
        }
})();
