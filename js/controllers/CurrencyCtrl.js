myApp.controller('CurrencyCtrl', function($scope) {
    $scope.money = 72;
    $scope.uber = 700;
    $scope.airbnb = 3500;
    $scope.bar = 500;
    $scope.dinner = 1500;
    $scope.museum = 700;
    $scope.subway = 35;
})

myApp.filter('currency', function() {
    var defaultCurrency = '₽';
    return function(input, currencySymbol) {
      var out = "";
      currencySymbol = currencySymbol || defaultCurrency;

        switch(currencySymbol) {
            case '$':
                out = 0.014 * input; // google
                break;

            default:
                out = input;
        }

      return currencySymbol + out + ' ';
    }
  });

  myApp.filter('noFractionCurrency',
  [ '$filter', '$locale',
  function(filter, locale) {
    var currencyFilter = filter('currency');
    var formats = locale.NUMBER_FORMATS;
    return function(amount, currencySymbol) {
      var value = currencyFilter(amount, currencySymbol);
      var sep = value.indexOf(formats.DECIMAL_SEP);
      if(amount >= 0) {
        return value.substring(0, sep);
      }
      return value.substring(0, sep) + ')';
    };
  } ]);
