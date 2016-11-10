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
	.module('yoApp', ['ui.router']).config(function($stateProvider,$urlRouterProvider) {
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
		})
        $urlRouterProvider.when('','/main');
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