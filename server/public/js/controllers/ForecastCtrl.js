myApp.controller('ForecastCtrl', ['$scope', 'forecast', function($scope, forecast) {
  function fetchWeather(id) {
         forecast.getWeather(id).then(function(data){
           $scope.place = data;
           console.log($scope.place);
         });
       }

       fetchWeather('2346910'); // moscow woeid. tula - 2124001 ,, portland - 2475687

       $scope.findWeather = function(id) {
       $scope.place = '';
       fetchWeather(id);
     };

}]);
