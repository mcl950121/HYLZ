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
//		alert(document.documentElement.clientHeight);		
		var curIndex = 0; //当前index
		var autoChange = setInterval(function() {
			if(curIndex < $(".frame li").length - 1) {
				curIndex++;
			} else {
				curIndex = 0;
			}
			//调用变换处理函数
			changeTo(curIndex);
		}, 5000);

		$(".frame_btn").find(".afBtn").each(function(item) {
			$(this).hover(function() {
				clearInterval(autoChange);
				changeTo(item);
				curIndex = item;
			}, function() {
				autoChange = setInterval(function() {
					if(curIndex < $(".frame li").length - 1) {
						curIndex++;
					} else {
						curIndex = 0;
					}
					//调用变换处理函数
					changeTo(curIndex);
				}, 5000);
			});
		});

		function changeTo(num) {
			$(".frame").find("li").removeClass("imgOn").hide(1000).eq(num).slideDown(1000).addClass("imgOn");
			$(".frame_btn").find(".afBtn").removeClass("indexOn").eq(num).addClass("indexOn");
		}
		clearInterval(autoChange);

	});