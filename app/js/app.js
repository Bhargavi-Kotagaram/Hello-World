var app = angular.module('myApp',[])
		.controller('MyController',['$scope',function(scope){
			scope.name="John";
			scope.message = "Angular controller working";
		}])
		.directive('welcome',function(){
			return{
				restrict:"EA",
				template:"<h1>Welcome</h1>"
			}			
		})