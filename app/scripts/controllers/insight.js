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
	    var top = divTop + (event.pageY - mousey);
	    $(this).css(
	    {
	    	'top' :  0 + 'px',
			'left' : left + 'px',
			'position' : 'absolute'
	});
        return false;
    }
    $(document).mouseup(function()
    {
        $('.new_list').unbind('mousemove');
    });
   
  });

