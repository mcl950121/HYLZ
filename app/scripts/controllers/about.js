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
	var pw=$('.jlunbo #jull li').width();
	  var shang=$('#jr-s .jtu1');
	  var xia=$('#jr-s .jtu2');
	  var num=0;	
	  xia.click(function(){
		  num++;
	     if(num==4){	  
		 num=3
		 //   alert('这已经是最后一张了');
			$('.jtu2 img').attr('src','images/hui1.png')
		    }else if(num!=4){
		    $('.jtu1 img').attr('src','images/sucai_07.png') 
			$('.jtu2 img').attr('src','images/sucai_03.png')
			$('.jlunbo #jull').animate({'left':-(pw*num)},800);
			}
	
		})
	  shang.click(function(){
		     num--;
			 if(num==-1){
			   num=0;
			//   alert('这已经是一张了');
			   $('.jtu1 img').attr('src','images/hui2.png')
			 }else if(num!=-1){
		     $('.jtu2 img').attr('src','images/sucai_03.png')
			 $('.jtu1 img').attr('src','images/sucai_07.png') 
			 $('.jlunbo #jull').animate({'left':-(pw*num)},800);
			 }

						 
		     })
			 /*轮播图结束*/
	    
			 
			 	
			/*logo选项卡*/ 
			var jtab=$('.yright .tcontent');
			var jjhao=$('.ylogo .jr_1 li');
				
		   jjhao.click(function(){
	         	var index=$(this).index();
				if(index<3){
				      jtab.eq(index).show().siblings().hide();
					}else if (index>=3&&index<=7){
					//	alert(index)
					 jtab.eq(index-1).show().siblings().hide();
						}else if(index==10){
							 jtab.eq(index-3).show().siblings().hide();
							}			
	});	
			
			 /*logo选项卡结束*/
			 
			 /*图片逐个显示*/
			 var tw=$('.jr_1 li img').width();
			  $('.jr_1 li').each(function(){
				  $('.jr_1 li img').animate({'marginleft':tw},800 )
				 
			  })
			 
			 
			 
			  /*图片逐个显示结束*/
			 

					 	
		})
	     	 
	  

   

  

   
  
  




