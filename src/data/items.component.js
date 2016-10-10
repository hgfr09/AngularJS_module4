(function () {
        'use strict';

        angular.module('Data')
                .component('itemsComponent', {
                        templateUrl: 'src/data/templates/items.template.html',
                        bindings:{
                                items:'<'
                        }
                });
})();
