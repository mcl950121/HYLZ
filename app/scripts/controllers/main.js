'use strict';

/**
 * @ngdoc function
 * @name yoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoApp
 */
angular.module('yoApp')
	.controller('main', function() {

var index = 0;
var autoChange = setInterval(function() {
	if(index < $(".frame li").length - 1) {
		index++;
	} else {
		index = 0;
	}	
	changeTo(index);
}, 5000);
$(".frame").find("li").each(function(i) {
	$(this).click(function() {
		clearInterval(autoChange);
		changeTo(i);
		index = i;
	}, function() {
		autoChange = setInterval(function() {
			if(index < $(".frame li").length - 1) {
				index++;
			} else {
				index = 0;
			}
			changeTo(index);
		}, 3000);
	});
});

function changeTo(num) {
	$(".frame").find("li").removeClass("imgOn").fadeOut(2000).eq(num).fadeIn(1000).addClass("imgOn");		
	$(".frame_btn").find(".fBtn").removeClass("indexOn").eq(num).addClass("indexOn");
}

	});