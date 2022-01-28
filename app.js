(function () {
'use strict';

angular.module('MsgApp', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
	
  $scope.computeMessage = function () {
	 
	 if($scope.inputItems == undefined)
		 $scope.message = "Please enter data first";
	 else if ($scope.inputItems.trim() == "")
		 $scope.message = "Please enter data first";
	 else if($scope.inputItems.split(",").length <= 3)
		 $scope.message = "Enjoy!";
	 else
		 $scope.message = "Too much!";
  };

}

})();
