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
	 
			 /*图片逐个显示*/
	    var i=0;
	    var jLi=$('#tuone li img');
        function jj(){ 
          if(i<jLi.length){ 
            jLi.eq(i).fadeIn(200);
            i++; 
          } 
          setTimeout(jj,200); 
        } 
        jj();
		
        var j=0;
	    var jye=$('#jye2 li img');
        function jyes(){ 
          if(j<jye.length){ 
             jye.eq(j).fadeIn(100);
                 j++; 
          } 
          setTimeout(jyes,100); 
        } 
		
	    var b=0;
	    var jye1=$('#jye3 li img');
        function jyes1(){ 
          if(b<jye1.length){ 
             jye1.eq(b).fadeIn(100);
                 b++; 
          } 
          setTimeout(jyes1,100); 
        } 
		
	    var c=0;
	    var jye2=$('#jye4 li img');
        function jyes2(){ 
          if(c<jye2.length){ 
             jye2.eq(c).fadeIn(100);
                 c++; 
          } 
          setTimeout(jyes2,100); 
        } 
 

			  /*图片逐个显示结束*/
	  
		 //点击右箭头
		 
	  xia.click(function(){
	
			 num++; 
	
	     if(num==aLi.length){
		     num=aLi.length-1;
		    $('.jtu2 img').attr('src','images/hui1.png');
		    $('.jkehu').addClass('active')
	        $('.jkehu').siblings().removeClass('active');
		    }else if(num==1){
		    $('.jtu1 img').attr('src','images/sucai_07.png') ;
			$('.jtu2 img').attr('src','images/sucai_03.png');	
			$('.jlunbo #jull').animate({'left':-(pw*num)},800);
			$('.jkehu').addClass('active')
	        $('.jkehu').siblings().removeClass('active');
				 jyes()
		  }else if(num==2){
		    $('.jtu1 img').attr('src','images/sucai_07.png') ;
			$('.jtu2 img').attr('src','images/sucai_03.png');	
			$('.jlunbo #jull').animate({'left':-(pw*num)},800);
			$('.jkehu').addClass('active')
	        $('.jkehu').siblings().removeClass('active');
				  jyes1() ;
		  }else if(num==3){
		    $('.jtu1 img').attr('src','images/sucai_07.png') ;
			$('.jtu2 img').attr('src','images/sucai_03.png');	
			$('.jlunbo #jull').animate({'left':-(pw*num)},800);
			$('.jkehu').addClass('active')
	        $('.jkehu').siblings().removeClass('active');
				  jyes2() 
		  }
		})
		
		//点击左箭头
	  shang.click(function(){
		    num--;
			if(num==-1){
			num=0;
			$('.jjituan').addClass('active');
	        $('.jjituan').siblings().removeClass('active');
			$('.jtu1 img').attr('src','images/hui2.png');
			}else if(num!=-1){
		    $('.jtu2 img').attr('src','images/sucai_03.png')
			$('.jtu1 img').attr('src','images/sucai_07.png') 
		    $('.jlunbo #jull').animate({'left':-(pw*num)},800);
			 }
	   })
			 
			 /*轮播图结束*/

	    /*右下角 */
		$('.jjituan').addClass('active');
		$('.jjituan').click(function(){
			  if(num!=0){

				  $('.jjituan').addClass('active')
	              $('.jjituan').siblings().removeClass('active');

				  $('.jlunbo #jull').animate({'left':(pw*0)},800);
				  }
		  })
		   
		  $('.jkehu').click(function(){
			  if(num!=1){

			    $('.jkehu').addClass('active')
	            $('.jkehu').siblings().removeClass('active');

			    $('.jlunbo #jull').animate({'left':-(pw*1)},800);
				  jyes()
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
                    $('.tcontent').eq(index).siblings().animate({'margin-top':50},{duration:300,step:function(){
						   $(this).fadeOut(600);
    						}})
						 setTimeout(function(){$('.tcontent').eq(index).fadeIn(600)
						 $('.tcontent').eq(index).animate({'margin-top':-10},{duration:300,step:function(){
							 $('.tcontent').eq(index).siblings().css('margin-top',30);
							 $('.tcontent').eq(index).fadeIn(600)
						 }
							})
						},1000);
						
					}else if (index>=3&&index<=7){
					$('.tcontent').eq(index-1).siblings().animate({'margin-top':50},{duration:300,step:function(){
				    $(this).fadeOut(600);
    				}})
				    setTimeout(function(){$('.tcontent').eq(index-1).fadeIn(600)
				    $('.tcontent').eq(index-1).animate({'margin-top':-10},{duration:300,step:function(){
					$('.tcontent').eq(index-1).siblings().css('margin-top',30);
					$('.tcontent').eq(index-1).fadeIn(600)
					    }
					  })
					},1000);
						
					}else if(index==10){
					$('.tcontent').eq(index).siblings().animate({'margin-top':50},{duration:300,step:function(){
					$(this).fadeOut(600);
    				}})
					setTimeout(function(){$('.tcontent').eq(index).fadeIn(600)
					$('.tcontent').eq(index).animate({'margin-top':-10},{duration:300,step:function(){
					$('.tcontent').eq(index).siblings().css('margin-top',30);
					$('.tcontent').eq(index).fadeIn(600)
						 }
					  })
					},1000);
					}	
					
			
	           });	
			
			 /*logo选项卡结束*/
			 
   

  })


  
  




