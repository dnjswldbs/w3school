var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {

	console.log("Hello world from controller");

    person1 = {
    	name: "Tim",
    	email: "tim@email.com",
    	number: "(111) 111 - 1111"
    };

    person2 = {
    	name: "Emily",
    	email: "emily@email.com",
    	number: "(222) 222 - 2222"
    };

    person3 = {
    	name: "John",
    	email: "john@email.com",
    	number: "(333) 333 - 3333"
    };

    var contactlist = [person1, person2, person3];
	$scope.contactlist = contactlist;

	// $http.get('/contactlist').success(function(response) {
	// 	console.log("I got the data I requested");


	// $http.get("welcome.htm")
	// 	.then(function(response) {
	// 		$scope.myWelcome = response.data;
	// 	});

	// });

});