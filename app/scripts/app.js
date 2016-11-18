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
			templateUrl: 'views/main.html',
			controller: "main"
		}).state("about", {
			url: "/about",
			templateUrl: 'views/about.html',
			controller: "about"
		}).state("case", {
			url: "/case",
			templateUrl: 'views/case.html',
			controller: "case"
		}).state("hire", {
			url: "/hire",
			templateUrl: 'views/hire.html',
			controller: "hire"
		}).state("insight", {
			url: "/insight",
			templateUrl: 'views/insight.html',
			controller: "insight"
		}).state("company", {
			url: "/company",
			templateUrl: 'views/company.html',
		}).state("geng1", {
			url: "/geng1",
			templateUrl: '../views/geng1.html',
			controller: "geng1"
		})
		$urlRouterProvider.when('', '/main');
	});
	
//$("[id*='Img']").stop(true).on('click', function(e) {
//	e.preventDefault();
//	$(this).scrolld();
//})

//导航切换效果

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

	//nav-home
	$('.nav-one').removeClass("opa");
	$('.nav-two').addClass("opa");
	$('.nav-three').addClass("opa");
	$('.nav-fore').addClass("opa");
	$('.nav-five').addClass("opa");
	$('.nav-open1').show();
	$('.nav-open2').hide();
	$('.nav-content').removeClass("nav-active");
   
    $('#next0Img').removeClass('alike');
	$('#next4Img').addClass('alike');
	$('#next1Img').addClass('alike');
	$('#next2Img').addClass('alike');
	$('#next3Img').addClass('alike');
	$('.next_bg').removeClass('yinC');
	$('.home-con').slideDown(2000);
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

	$('#next1Img').removeClass('alike');
	$('#next0Img').addClass('alike');
	$('#next2Img').addClass('alike');
	$('#next3Img').addClass('alike');
	$('#next4Img').addClass('alike');
	$('.next_bg').removeClass('yinC');
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

	$('#next2Img').removeClass('alike');
	$('#next0Img').addClass('alike');
	$('#next1Img').addClass('alike');
	$('#next3Img').addClass('alike');
	$('#next4Img').addClass('alike');
	$('.next_bg').removeClass('yinC');
//	$('.w-box').slideUp();
	$('.w-box').slideDown(2000);
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

    $('#next3Img').removeClass('alike');
	$('#next0Img').addClass('alike');
	$('#next1Img').addClass('alike');
	$('#next2Img').addClass('alike');
	$('#next4Img').addClass('alike');
	$('.next_bg').removeClass('yinC');
	$('.Big').slideUp();
	$('.Big').slideDown(2000);
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

    $('#next4Img').removeClass('alike');
	$('#next0Img').addClass('alike');
	$('#next1Img').addClass('alike');
	$('#next2Img').addClass('alike');
	$('#next3Img').addClass('alike');
	$('.next_bg').addClass('yinC');
//	$('.new_main').slideUp();
	$('.new_main').slideDown(2000);

})

$('.logo').click(function() {
	alert($('.da').length)
	$('.da').show;

})

//底部页面切换效果
$('#next0Img').click(function() {
	$('#next1Img').removeClass('alike');
	$('#next0Img').addClass('alike');
	$('#next2Img').addClass('alike');
	$('#next3Img').addClass('alike');
	$('#next4Img').addClass('alike');
	$('.next_bg').removeClass('yinC');

   $('.nav-two').removeClass("opa");
	$('.nav-one').addClass("opa");
	$('.nav-three').addClass("opa");
	$('.nav-fore').addClass("opa");
	$('.nav-five').addClass("opa");
	$('.nav-open1').show();
	$('.nav-open2').hide();
	$('.nav-content').removeClass("nav-active");
})
$('#next1Img').click(function() {
	$('#next2Img').removeClass('alike');
	$('#next0Img').addClass('alike');
	$('#next1Img').addClass('alike');
	$('#next3Img').addClass('alike');
	$('#next4Img').addClass('alike');
	$('.next_bg').removeClass('yinC');
    
    $('.nav-three').removeClass("opa");
	$('.nav-one').addClass("opa");
	$('.nav-two').addClass("opa");
	$('.nav-fore').addClass("opa");
	$('.nav-five').addClass("opa");
	$('.nav-open1').show();
	$('.nav-open2').hide();
	$('.nav-content').removeClass("nav-active");
})
$('#next2Img').click(function() {
	$('#next3Img').removeClass('alike');
	$('#next0Img').addClass('alike');
	$('#next1Img').addClass('alike');
	$('#next2Img').addClass('alike');
	$('#next4Img').addClass('alike');
	$('.next_bg').removeClass('yinC');
 
    $('.nav-fore').removeClass("opa");
	$('.nav-one').addClass("opa");
	$('.nav-two').addClass("opa");
	$('.nav-three').addClass("opa");
	$('.nav-five').addClass("opa");
	$('.nav-open1').show();
	$('.nav-open2').hide();
	$('.nav-content').removeClass("nav-active");
})
$('#next3Img').click(function() {
	$('#next4Img').removeClass('alike');
	$('#next0Img').addClass('alike');
	$('#next1Img').addClass('alike');
	$('#next2Img').addClass('alike');
	$('#next3Img').addClass('alike');
	$('.next_bg').addClass('yinC');

    $('.nav-five').removeClass("opa");
	$('.nav-one').addClass("opa");
	$('.nav-two').addClass("opa");
	$('.nav-three').addClass("opa");
	$('.nav-fore').addClass("opa");
	$('.nav-open1').show();
	$('.nav-open2').hide();
	$('.nav-content').removeClass("nav-active");

})
$('#next4Img').click(function() {
	$('#next0Img').removeClass('alike');
	$('#next4Img').addClass('alike');
	$('#next1Img').addClass('alike');
	$('#next2Img').addClass('alike');
	$('#next3Img').addClass('alike');
	$('.next_bg').removeClass('yinC');

    $('.nav-one').removeClass("opa");
	$('.nav-two').addClass("opa");
	$('.nav-three').addClass("opa");
	$('.nav-fore').addClass("opa");
	$('.nav-five').addClass("opa");
	$('.nav-open1').show();
	$('.nav-open2').hide();
	$('.nav-content').removeClass("nav-active");
})