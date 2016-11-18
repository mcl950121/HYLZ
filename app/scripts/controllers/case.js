'use strict';

/**
 * @ngdoc function
 * @name yoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoApp
 */
angular.module('yoApp').controller('case', function () {
	//下面的蒙泰效果
	$('.backgroundRed').hover(function(){
		$(this).children('.bgOpact,.arrow1,.kuang').show();
	},function(){
		$(this).children('.bgOpact,.arrow1,.kuang').hide();
	})




    //点击弹框效果
	$('.bgOpact').click(function(){			
			$('#id1').fadeIn(1000);
		})		
		$('.delete').click(function(){			
			$('#id1').fadeOut(1000);
		})

});