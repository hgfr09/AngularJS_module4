(function(){
        'use strict';
        
        angular.module('Data')
                .controller('ItemsController', ItemsController);
        
       ItemsController.$inject = ['items'];
        function ItemsController(items){
                var itemsCont = this;
                itemsCont.items = items.data.menu_items;
        }
})();
