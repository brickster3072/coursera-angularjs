(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;
  toBuy.items = ShoppingListCheckOffService.getToBuyItems();

  toBuy.moveItem = function (itemIndex) {
  ShoppingListCheckOffService.moveItem(itemIndex);
  };
} // end ToBuyController

AlreadyBoughtController.$inject = [ 'ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bought = this;
    bought.items = ShoppingListCheckOffService.getBoughtItems();
} // end AlreadyBoughtController

function ShoppingListCheckOffService() {
   var service = this;
   // List of shopping items
   var toBuy = [];
   var bought = [];
   bought.items = [];
   toBuy.items = [ {name: "bags of grass",  quantity: 2},
                   {name: "pellets of mescaline",  quantity: 75},
                   {name: "sheets of high-powered blotter acid",  quantity: 5},
                   {name: "saltshaker half-full of cocaine",  quantity: 1},
                   {name: "whole galaxy of multi-colored uppers, downers, screamers, laughers",  quantity: 1},
                   {name: "quart of tequila",  quantity: 1},
                   {name: "quart of rum",  quantity: 1},
                   {name: "case of beer",  quantity: 1},
                   {name: "pint of raw ether",  quantity: 1},
                   {name: "amyls",  quantity: 24}
                ];
  service.getToBuyItems = function () {
    return toBuy.items;
  };

  service.getBoughtItems = function () {
    return bought.items;
  };

  service.moveItem = function (itemIdex) {
    var toMoveItem = [];
    toMoveItem = toBuy.items.splice(itemIdex, 1);
    bought.items.splice(0, 0, toMoveItem[0]);
  };
} // end ShoppingListCheckOffService

})();
