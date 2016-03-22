
## About
WhyTravel is a one-page web app built with AngularJS with the information on why you should travel to Russia today. It takes current cost in Rubles for popular tourist expenses, such as Uber ride, AirBnb stay, subway pass and so on, dynamically converts them into dollars and displays the converted prices on the page.


## API

I'm using the Yahoo Weather API for the current weather and the YQL to retrieve exchange rates effective to date.
Yahoo Query Language lets you get a whole bunch of currencies at once in XML or JSON. The data updates by the second, and stops in the weekend. Doesn't require any kind of sign up.
Here is the YQL query builder, where one can test a query and copy the url: https://developer.yahoo.com/yql/console/?q=show%20tables&env=store://datatables.org/alltableswithkeys#h=select+*+from+yahoo.finance.xchange+where+pair+in+(%22USDRUB%22)
