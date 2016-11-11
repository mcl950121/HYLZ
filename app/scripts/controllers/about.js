'use strict';

/**
 * @ngdoc function
 * @name yoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoApp
 */
angular.module('yoApp')
  .controller('main', function () {
	  
   var pw=$('.lunbo #ull').width();
	  var shang=$('#r-s .tu1');
	  var xia=$('#r-s .tu2');
	  var num=0;	  					
	xia.click(function(){
		$('#ull').stop().animate({'left':-pw},800,function(){
			num++;
			if(num!=$('#ull .jj_a').length){
				 $('#ull .jj_a:first').appendTo('#ull');
				}else if(num==$('#ull .jj_a').length){
					num=$('#ull .jj_a').length-1;
						alert('这已经是最后一张了');
					}
		//	$('.box ul').css({'left':0})
			})
		})
		
	shang.click(function(){
		   $('#ull').css({'left':pw});
		     num--;
			 if(num!=-1){
				 $('#ull .jj_a:last').prependTo('#ull');
				 }else if(num==-1){
					 num=0;
					 		alert('这已经是一张了');
					 }
	     	  //$('.box ul').stop().animate({'left':0});
		})	
   
  });
  

   
  
  




