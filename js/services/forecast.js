myApp.factory('forecast', ['$http', '$q', function ($http, $q){
  function getWeather (id) {
      var deferred = $q.defer();
      $http.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%3D' + id +'%0A&format=json&diagnostics=true&callback=')
        .success(function(data){
          deferred.resolve(data.query.results.channel);
        })
        .error(function(err){
          console.log('Error retrieving markets');
          deferred.reject(err);
        });
      return deferred.promise;
    }

    return {
      getWeather: getWeather
    };

    }]);
