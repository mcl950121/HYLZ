'use strict';

/**
 * @ngdoc function
 * @name yoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoApp
 */
angular.module('yoApp')
  .controller('insight', function () {
  	
//	$('.new_list').width(($('.new_list li').eq(0).width()+50)*$('.new_list li').length);
//	var nwe_width= document.body.clientWidth || document.documentElement.clientWidth;
//	$('.new_list').css({
//		'top' :  0 + 'px',
//		'left' : -225 + 'px',
//		'position' : 'absolute'
//	})
//	var mousex = 0, mousey = 0;
//  var divLeft, divTop;
//  $('.new_list').mousedown(function(e)
//  {
//      var offset = $(this).offset();
//      divLeft = parseInt(offset.left,10);
//      divTop = parseInt(offset.top,10);
//      mousey = e.pageY;
//      mousex = e.pageX;
//      $(this).bind('mousemove',dragElement);
//  });
// 
//	function dragElement(event)
//	{
//	    var left = divLeft + (event.pageX - mousex);
//	    console.log(event.pageX)
//	    console.log(mousex)
//	    console.log(left);
//	    var top = divTop + (event.pageY - mousey);
//	    $(this).css(
//	    {
//	    	'top' :  0 + 'px',
//			'left' : left + 'px',
//			'position' : 'absolute'
//	});		
//      return false;
//  }
//  $(document).mouseup(function(event)
//  {
//      var new_move1 = event.pageX - mousex;
//      var new_move2=new_move1/360;
//		var new_move=parseInt('new_move2')-230;
//      $('.new_list').css({
//	  		'top' :  0 + 'px',
//			'left' : new_move + 'px',
//			'position' : 'absolute'
//		})
//      $('.new_list').unbind('mousemove');
//  });
	
//	$('.swiper-slide').click(function(){
//		$(this).find('.infor_box').stop().fadeIn("normal").parent().siblings().find('.infor_box').stop().fadeOut("normal");
//	})
	setInterval(function(){
		$(".swiper-slide").each(function(){
			var ofright = $(this).css("opacity");
			if(ofright =='1'){
				$(this).find('.infor_box').stop().fadeIn("fast")
			}else{
				$(this).find('.infor_box').stop().fadeOut("fast")
			}
		}),10
	})
	
    
    var new_off=true;
    $('.new_ce_list ul li').eq(0).click(function(){
    	if(new_off==true){
    		$('.new_ce_list').animate({bottom: '-230px'}, "slow");
    		$('#new_d1').css({
    			display:'none'
    		});
    		$('#new_d2').css({
    			display:'block'
    		});
    		new_off=false;
    	}else{
    		$('.new_ce_list').animate({bottom: '0px'}, "slow");
    		$('#new_d1').css({
    			display:'block'
    		});
    		$('#new_d2').css({
    			display:'none'
    		});
    		new_off=true;
    	}
    	
    })
    
   
  });

