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
	var pw=$('.jlunbo #jull .jj_a').width();
	var aLi=$('.jlunbo #jull .jj_a');
	  var shang=$('#jr-s .jtu1');
	  var xia=$('#jr-s .jtu2');
	  var liLen=$('.jlunbo #jull li')
	  var num=0;	
	   $('.jtu1 img').attr('src','images/hui2.png')
	 
	
		 //点击右箭头
		 
	  xia.click(function(){
			 num++;	
	     if(num==aLi.length){
			// alert('这已经是最后一张了')	  
		     num=aLi.length-1;
		$('.jtu2 img').attr('src','images/hui1.png')
		    }else{
		    $('.jtu1 img').attr('src','images/sucai_07.png') ;
			$('.jtu2 img').attr('src','images/sucai_03.png');
			
			$('.jlunbo #jull').animate({'left':-(pw*num)},800);
		  }
	
		})
		
		//点击左箭头
	  shang.click(function(){
		    num--;
			 if(num==-1){
			num=0;
			//	alert('这已经是第一张了')
			   $('.jtu1 img').attr('src','images/hui2.png');
			 }else if(num!=-1){
		     $('.jtu2 img').attr('src','images/sucai_03.png')
			 $('.jtu1 img').attr('src','images/sucai_07.png') 
			 $('.jlunbo #jull').animate({'left':-(pw*num)},800);
			 }
        
         
						 
		     })
			 /*轮播图结束*/
			 
			 			
					

	    /*右下角 */
		$('.jjituan').click(function(){
			//  num--;
			  if(num!=0){
				   alert(1);
				  $('.jlunbo #jull').animate({'left':(pw*0)},800);
					
				  }
		  })
		  
		  $('.jkehu').click(function(){
			  if(num!=1){
				  alert(2)
			    $('.jlunbo #jull').animate({'left':-(pw*1)},800);
				  }
			  })

		/*右下角*/
			 
		/*收起效果*/	 
		$('.jxia').click(function(){
			if($('.jxia .jjtu1').is(':hidden')){
				 $('.jxia .jjtu1').show();
				 $('.jxia .jjtu').hide();
		         $('.jr-x').animate({'bottom':-114},300);
			}else {
				 $('.jxia .jjtu1').hide();
				 $('.jxia .jjtu').show();
		         $('.jr-x').animate({'bottom':1},300);
			}
		 
		})
		
		/*收起效果*/	
			 	
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
						//.style.transform = "translate(0,310px)".css('transform','translate(0,110px)').animate({'margin-top':1},800).animate({'margin-bottom':-100},800)
			
	           });	
			
			 /*logo选项卡结束*/
			 
			 /*图片逐个显示*/
	/*		 var tw=$('.jr_1 li img').width();
			  $('.jr_1 li').each(function(){
				  $('.jr_1 li img').animate({'margin-left':tw},800 )
				 
			  })*/
			 
			 
			 
			  /*图片逐个显示结束*/
			 

					 	
		})
	     	 
	  

   

  

   
  
  




