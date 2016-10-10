(function () {
        'use strict';


        angular.module('MenuApp')
                .config(RoutesConfig);

        RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
        function RoutesConfig($stateProvider, $urlRouterProvider) {
                //Redirect to home
                $urlRouterProvider.otherwise('/');

                $stateProvider
                        .state('home', {
                                url: '/',
                                templateUrl: 'src/data/templates/home.template.html'
                        })
                        .state('categories', {
                                url: '/categories',
                                controller: 'CategoriesController as categories',
                                templateUrl: 'src/data/templates/categories.component.template.html',
                                resolve: {
                                        items: ['MenuDataService', function (MenuDataService) {
                                                        return MenuDataService.getAllCategories();
                                                }]
                                }
                        })
                        .state('items', {
                                url: '/items/{itemsId}',
                                templateUrl: 'src/data/templates/items.component.template.html',
                                controller: 'ItemsController as itemsCont',
                                resolve: {
                                        items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
                                                       return MenuDataService.getItemsForCategory($stateParams.itemsId);                                                       
                                                }]
                                }
                        });
                
        }
})();

