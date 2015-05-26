angular.module('quoteApp').controller('quoteAppController', function($scope){
    
    $scope.result = {};
	$scope.result.lowResult = function() {
        base = 500;
        if ($scope.siteType.currentType == 'Multipage Website') {
            base = base + 1500;
        }
        if ($scope.siteType.currentType == 'Ecommerce Website') {
            base = base + 2500;
        }
        console.log("Base: " + base);
        return base;
    };
    $scope.result.highResult = 1;
    
    //Variables for What Kind of Site
    $scope.pageType = ['Single Page Website', 'Multipage Website', 'Ecommerce Website'];
    $scope.siteType = {currentType: ''};
    
    //Variables for Other Needs
    $scope.needs = {
        logo : false,
        hosting : false,
        domain : false,
        customCoding : false
    };
    
    //Interval checker
    setInterval(
        function(){
            console.log("Site Type: " + $scope.siteType.currentType);
            console.log("Needs: " + $scope.needs.logo + $scope.needs.hosting);
            console.log($scope.result.lowResult);
        },3000);
    
});