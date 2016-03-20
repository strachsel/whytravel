myApp.factory('exchange', ['$http', '$q', function($http, $q){
  function getExchange() {
      var deferred = $q.defer();
      $http.get('http://api.fixer.io/latest?symbols=USD,RUB')
          .success(function(data) {
              // deferred.resolve(data.query.results.channel);
          })
          .error(function(err) {
              console.log('Error retrieving markets');
              deferred.reject(err);
          });
      return deferred.promise;
  }
  return {
      getExchange: getExchange
  };

}]);
