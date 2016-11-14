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
  	
  	$('.new_list').width(($('.new_list li').eq(0).width()+50)*$('.new_list li').length);
  	$('.new_list').width(($('.new_list li').eq(0).width()+50)*$('.new_list li').length);
  	var nwe_width= document.body.clientWidth || document.documentElement.clientWidth;
  	$('.new_list').css({
  		'top' :  0 + 'px',
		'left' : -225 + 'px',
		'position' : 'absolute'
  	})
	var mousex = 0, mousey = 0;
    var divLeft, divTop;
    $('.new_list').mousedown(function(e)
    {
        var offset = $(this).offset();
        divLeft = parseInt(offset.left,10);
        divTop = parseInt(offset.top,10);
        mousey = e.pageY;
        mousex = e.pageX;
        $(this).bind('mousemove',dragElement);
    });
 
	function dragElement(event)
	{
	    var left = divLeft + (event.pageX - mousex);
	    console.log(event.pageX)
	    console.log(mousex)
	    console.log(left);
	    var top = divTop + (event.pageY - mousey);
	    $(this).css(
	    {
	    	'top' :  0 + 'px',
			'left' : left + 'px',
			'position' : 'absolute'
	});
        return false;
    }
    $(document).mouseup(function(event)
    {
        var new_move1 = event.pageX - mousex;
        var new_move2=new_move1/360;
		var new_move=parseInt('new_move2')-230;
        $('.new_list').css({
	  		'top' :  0 + 'px',
			'left' : new_move + 'px',
			'position' : 'absolute'
		})
        $('.new_list').unbind('mousemove');
    });
   
  });

