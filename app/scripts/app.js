'use strict';

/**
 * @ngdoc overview
 * @name yoApp
 * @description
 * # yoApp
 *
 * Main module of the application.
 */
angular
    .module('yoApp', ['ui.router']).config(function($stateProvider){
  	    $stateProvider.state("main",{
	  		url:"main",
	  		templateUrl:'../views/main.html',
	  		controller:"main"
	  	}).state("about",{
	  		url:"/about",
	  		templateUrl:'../views/about.html',
	  		controller:"about"
	  	}).state("case",{
	  		url:"/case",
	  		templateUrl:'../views/case.html',
	  		controller:"case"
	  	}).state("hire",{
	  		url:"/hire",
	  		templateUrl:'../views/hire.html',
	  		controller:"hire"
	  	}).state("insight",{
	  		url:"/insight",
	  		templateUrl:'../views/insight.html',
	  		controller:"insight"
	  	})
	  	
	  	
    });
