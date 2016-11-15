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
	.module('yoApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {
		$stateProvider.state("main", {
			url: "/main",
			templateUrl: '../views/main.html',
			controller: "main"
		}).state("about", {
			url: "/about",
			templateUrl: '../views/about.html',
			controller: "about"
		}).state("case", {
			url: "/case",
			templateUrl: '../views/case.html',
			controller: "case"
		}).state("hire", {
			url: "/hire",
			templateUrl: '../views/hire.html',
			controller: "hire"
		}).state("insight", {
			url: "/insight",
			templateUrl: '../views/insight.html',
			controller: "insight"
		}).state("company", {
			url: "/company",
			templateUrl: '../views/company.html',
			controller: "company"
		}).state("geng1", {
			url: "/geng1",
			templateUrl: '../views/geng1.html',
			controller: "geng1"
		})
		$urlRouterProvider.when('', '/main');
	});


$('.nav-open1').click(function() {
	$('.nav-open1').hide();
	$('.nav-open2').show();
	$('.nav-content').addClass("nav-active");
})
$('.nav-open2').click(function() {
	$('.nav-open1').show();
	$('.nav-open2').hide();
	$('.nav-content').removeClass("nav-active");
})
$('.nav-one').click(function() {
	$('.nav-one').removeClass("opa");
	$('.nav-two').addClass("opa");
	$('.nav-three').addClass("opa");
	$('.nav-fore').addClass("opa");
	$('.nav-five').addClass("opa");
	$('.nav-open1').show();
	$('.nav-open2').hide();
	$('.nav-content').removeClass("nav-active");
})
$('.nav-two').click(function() {
	$('.nav-two').removeClass("opa");
	$('.nav-one').addClass("opa");
	$('.nav-three').addClass("opa");
	$('.nav-fore').addClass("opa");
	$('.nav-five').addClass("opa");
	$('.nav-open1').show();
	$('.nav-open2').hide();
	$('.nav-content').removeClass("nav-active");
})
$('.nav-three').click(function() {
	$('.nav-three').removeClass("opa");
	$('.nav-one').addClass("opa");
	$('.nav-two').addClass("opa");
	$('.nav-fore').addClass("opa");
	$('.nav-five').addClass("opa");
	$('.nav-open1').show();
	$('.nav-open2').hide();
	$('.nav-content').removeClass("nav-active");
})
$('.nav-fore').click(function() {
	$('.nav-fore').removeClass("opa");
	$('.nav-one').addClass("opa");
	$('.nav-two').addClass("opa");
	$('.nav-three').addClass("opa");
	$('.nav-five').addClass("opa");
	$('.nav-open1').show();
	$('.nav-open2').hide();
	$('.nav-content').removeClass("nav-active");
})
	
$('.nav-five').click(function() {
	$('.nav-five').removeClass("opa");
	$('.nav-one').addClass("opa");
	$('.nav-two').addClass("opa");
	$('.nav-three').addClass("opa");
	$('.nav-fore').addClass("opa");
	$('.nav-open1').show();
	$('.nav-open2').hide();
	$('.nav-content').removeClass("nav-active");
})

$('.logo').click(function(){
	//alert(1)
	alert($('.da').length)
	$('.da').show;
	
	})




