'use strict';

/**
 * @ngdoc function
 * @name yoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoApp
 */
angular.module('yoApp').controller('case', function () {
	$('.backgroundRed').hover(function(){
		$(this).children('.bgOpact,.arrow1').show();
	},function(){
		$(this).children('.bgOpact,.arrow1').hide();
	})
});


