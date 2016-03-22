myApp.service('exchange', function($http, $q) {
    var deferred = $q.defer();
    $http.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20(%22USDRUB%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=').then(function(data) {
        deferred.resolve(data);
    });
    this.getCurrency = function() {
        return deferred.promise;
    }
});

myApp.controller('curCtrl', function($scope, exchange) {
    var promise = exchange.getCurrency();
    promise.then(function(data) {
        $scope.exchange = data.data;
        console.log($scope.exchange);
    });

    $scope.money = 72;
    $scope.uber = 800;
    $scope.airbnb = 5000;
    $scope.bar = 500;
    $scope.dinner = 1500;
    $scope.museum = 700;
    $scope.subway = 35;

});

myApp.filter('noFractionCurrency', ['$filter', '$locale',
    function(filter, locale) {
        var currencyFilter = filter('currency');
        var formats = locale.NUMBER_FORMATS;
        return function(amount, currencySymbol) {
            var value = currencyFilter(amount, currencySymbol);
            var sep = value.indexOf(formats.DECIMAL_SEP);
            if (amount >= 0) {
                return value.substring(0, sep);
            }
            return value.substring(0, sep) + ')';
        };
    }
]);
