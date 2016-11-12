'use strict';

/**
 * @ngdoc function
 * @name yoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoApp
 */
angular.module('yoApp').controller('about', function () {
	/*轮播图*/
	var pw=$('.jlunbo #jull').width();
	  var shang=$('#jr-s .jtu1');
	  var xia=$('#jr-s .jtu2');
	  var num=0;	  					
	  xia.click(function(){
		$('#jull').stop().animate({'left':-pw},800,function(){
			num++;
			if(num!=$('#jull .jj_a').length){
				 $('#jull .jj_a:first').appendTo('#jull');
				}else if(num==$('#jull .jj_a').length){
					num=$('#jull .jj_a').length-1;
						alert('这已经是最后一张了');
					}
			})
		})
	shang.click(function(){
		   $('#jull').css({'left':pw});
		     num--;
			 if(num!=-1){
				 $('#jull .jj_a:last').prependTo('#jull');
				 }else if(num==-1){
					 num=0;
				alert('这已经是一张了');
					 }
		     })
			 /*轮播图结束*/
			 	
			/*logo选项卡*/ 
			var jtab=$('.yright .tcontent');
			var jjhao=$('.ylogo .jr_1 li');
				
		   jjhao.click(function(){
	         	var index=$(this).index();
		jtab.eq(index).show().siblings().hide(); 
	});	
			
			 /*logo选项卡结束*/
			 
			 /*图片逐个显示*/
			 var tw=$('.jr_1 li img').width();
			  $('.jr_1 li').each(function(){
				  $('.jr_1 li img').animate({'marginleft':tw},800 )
				 
			  })
			 
			 
			 
			  /*图片逐个显示结束*/
			 

					 	
		})
	     	 
	  

   

  

   
  
  




