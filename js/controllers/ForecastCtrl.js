myApp.controller('ForecastCtrl', ['$scope', 'forecast', function($scope, forecast) {
  function fetchWeather(id) {
         forecast.getWeather(id).then(function(data){
           $scope.place = data;
         });
       }

       fetchWeather('2346910'); // moscow woeid. tula - 2124001

       $scope.findWeather = function(id) {
       $scope.place = '';
       fetchWeather(id);
     };
}]);
