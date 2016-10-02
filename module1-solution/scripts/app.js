(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.checkLunch = function () {
  if(typeof($scope.LunchMenu) == 'undefined' || $scope.LunchMenu.length == 0){
    $scope.TestOutput = "Please enter data first";
    $scope.TextFlag = 'text-failure';
    $scope.BorderFlag = 'border-failure';
  }
  else{
    var separator = ",";
    var items = $scope.LunchMenu.split(separator)
    var index;
    var count= 0;
    for (index = 0; index < items.length; ++index) {
      if (items[index].trim()){
        count++;
      }
    }
    if(count==0){
      $scope.TestOutput = "Please enter data first";
      $scope.BorderFlag = 'border-failure';
      $scope.TextFlag = 'text-failure';
    }
    else if(count <= 3 ){
      $scope.TestOutput = "Enjoy!";
      $scope.BorderFlag = 'border-success';
      $scope.TextFlag = 'text-success';
    }
    else{
      $scope.TestOutput = "Too Much!";
      $scope.BorderFlag = 'border-success';
      $scope.TextFlag = 'text-success';
    }
  }
}; // end checkLunch
} // end LunchCheckController

})();
