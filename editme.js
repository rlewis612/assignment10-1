/*
Open Notify API: http://api.open-notify.org/iss-now.json
Google Static Maps API: https://maps.googleapis.com/maps/api/staticmap?size=640x480&zoom=3&markers=LATITUDE,LONGITUDE';
*/

var app = angular.module("MapApp", []);

app.controller("MapController", function ($scope, $http) {
	$scope.getPosition = function() {
		$http.jsonp('http://api.open-notify.org/iss-now.json?callback=JSON_CALLBACK')
			.success(function(data) {
				var lat = data.iss_position.latitude;
				var lon = data.iss_position.longitude;
				$scope.mapUrl = "https://maps.googleapis.com/maps/api/staticmap?size=640x480&zoom=3&markers=" + lat + "," + lon;
			});
		}
  
});