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

		var curIndex = 0;
		var aTime;
		aTime = setInterval(aChang, 8000);
		// 左键头
		$('.fBtn_left').click(function() {

				clearInterval(aTime);
				$('.fBtn_left').addClass("indexOn");
				$('.fBtn_right').removeClass("indexOn");

				curIndex--;
				if(curIndex < 0) {
					curIndex = 1
				}
				changeTo(curIndex);	
				
				aTime = setInterval(aChang, 8000);
			})
			// 右键头
		$('.fBtn_right').click(function() {

			clearInterval(aTime);
			$('.fBtn_right').addClass("indexOn");
			$('.fBtn_left').removeClass("indexOn");

			curIndex++;
			if(curIndex > 1) {
				curIndex = 0;
			}
			changeTo(curIndex);	
			
			aTime = setInterval(aChang, 8000);
		})
        		
		function aChang() {
			if(curIndex < 1) {
				curIndex++;
			} else {
				curIndex = 0;
			}
			changeTo(curIndex);
		}

		function changeTo(num) {

			$(".frame").find("li").removeClass("imgOn").animate({left:'-50px',opacity:0},1000).fadeOut(1000).eq(num).animate({left:'0',opacity:1},50).fadeIn(300).addClass("imgOn");
            
		}

		$('.arrow_white1').click(function() {
			$('#covered').fadeIn(1000);

			$("#huan").show(); //显示
			setTimeout(function() { //5秒后隐藏
				$("#huan").hide();
			}, 5000);
            
            setTimeout(function(){//5秒后显示ʾ
                $(".covered_con").fadeIn();
            }, 5000);
           						
		})

		$('.delete').click(function() {
			$('#covered').fadeOut(1000);
		})

		//自顶替滚动条效果
		// item_btn.onmousedown = function(e) {
		// 	var ev = e || event;
		// 	document.onmousemove = function(e) {
		// 		var ev = e || event;

		// 		var maxW = item_line.offsetWidth - item_btn.offsetWidth;
		// 		var maxH = item_line.offsetHeight - item_btn.offsetHeight;

		// 		var l = ev.clientX - item_line.offsetLeft - item_btn.offsetWidth / 2;
		// 		var t = ev.clientY - item_line.offsetTop - item_btn.offsetHeight / 2;

		// 		l = l < 0 ? 0 : l;
		// 		l = l > maxW ? maxW : l;
		// 		t = t < 0 ? 0 : t;
		// 		t = t > maxH ? maxH : t;
		// 		item_btn.style.left = l + 2 + 'px';
		// 		item_btn.style.top = t + 'px';

		// 		var a = item_btn.offsetTop / (item_line.offsetHeight - (item_btn.offsetHeight - 2));
		// 		details_con.style.top = -(details_con.offsetHeight - details.offsetHeight) * a + "px";
		// 	}

		// 	document.onmouseup = function() {
		// 		document.onmousemove = document.onmouseup = null;
		// 	}
		// 	return false;
		// }

	});