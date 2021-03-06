'use strict';

/**
 * @ngdoc function
 * @name yoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoApp
 */
angular.module('yoApp')
  .controller('hire', function ($scope) {
   		$scope.data=[
	        {"nav":"销售总监     Sales Director","subnav":[{"snav":"职位描述"},{"snav":"岗位职责"},{"snav":"1、负责上海快消行业客户；"},{"snav":"2、负责腾讯大字系列地方网站广告的销售、产品推广、市场开发，制定并达成各项销售计划；"},{"snav":"3、负责上海广告公司的谈判与开发；"},{"snav":"4、组织各环节执行人员销售政策培训，监督执行效果；"},{"snav":"5、维护公司形象，巩固与合作方的公共关系，强化合作信用，提升市场销量;"},{"snav":"6、对市场竟品动态的分析以及本产品营销计划和方案的拟定及组织实施。"},{"snav":"岗位要求"},{"snav":"1、大专及以上学历，7年以上相工作经验，有互联网和广告销售经验优先；"},{"snav":"2、熟悉或意愿往新媒体、广告行业发展者优先考虑；"},{"snav":"3、具备一定的策划能力、出色的沟通表达能力及人际关系处理能力；"},{"snav":"4、为人诚信、吃苦耐劳，善于沟通及整合资源，具有较强的工作抗压能力和开拓精神。"}]},
	       {"nav":"资深互动设计师     Sr. Interactive Designer","subnav":[{"snav":"职位描述"},{"snav":"岗位职责"},{"snav":"1、负责上海快消行业客户；"},{"snav":"2、负责腾讯大字系列地方网站广告的销售、产品推广、市场开发，制定并达成各项销售计划；"},{"snav":"3、负责上海广告公司的谈判与开发；"},{"snav":"4、组织各环节执行人员销售政策培训，监督执行效果；"},{"snav":"5、维护公司形象，巩固与合作方的公共关系，强化合作信用，提升市场销量;"},{"snav":"6、对市场竟品动态的分析以及本产品营销计划和方案的拟定及组织实施。"},{"snav":"岗位要求"},{"snav":"1、大专及以上学历，7年以上相工作经验，有互联网和广告销售经验优先；"},{"snav":"2、熟悉或意愿往新媒体、广告行业发展者优先考虑；"},{"snav":"3、具备一定的策划能力、出色的沟通表达能力及人际关系处理能力；"},{"snav":"4、为人诚信、吃苦耐劳，善于沟通及整合资源，具有较强的工作抗压能力和开拓精神。"}]},
	       {"nav":"行业策划      planning","subnav":[{"snav":"职位描述"},{"snav":"岗位职责"},{"snav":"1、负责上海快消行业客户；"},{"snav":"2、负责腾讯大字系列地方网站广告的销售、产品推广、市场开发，制定并达成各项销售计划；"},{"snav":"3、负责上海广告公司的谈判与开发；"},{"snav":"4、组织各环节执行人员销售政策培训，监督执行效果；"},{"snav":"5、维护公司形象，巩固与合作方的公共关系，强化合作信用，提升市场销量;"},{"snav":"6、对市场竟品动态的分析以及本产品营销计划和方案的拟定及组织实施。"},{"snav":"岗位要求"},{"snav":"1、大专及以上学历，7年以上相工作经验，有互联网和广告销售经验优先；"},{"snav":"2、熟悉或意愿往新媒体、广告行业发展者优先考虑；"},{"snav":"3、具备一定的策划能力、出色的沟通表达能力及人际关系处理能力；"},{"snav":"4、为人诚信、吃苦耐劳，善于沟通及整合资源，具有较强的工作抗压能力和开拓精神。"}]},
	         {"nav":"销售经理      Sales Manager","subnav":[{"snav":"职位描述"},{"snav":"岗位职责"},{"snav":"1、负责上海快消行业客户；"},{"snav":"2、负责腾讯大字系列地方网站广告的销售、产品推广、市场开发，制定并达成各项销售计划；"},{"snav":"3、负责上海广告公司的谈判与开发；"},{"snav":"4、组织各环节执行人员销售政策培训，监督执行效果；"},{"snav":"5、维护公司形象，巩固与合作方的公共关系，强化合作信用，提升市场销量;"},{"snav":"6、对市场竟品动态的分析以及本产品营销计划和方案的拟定及组织实施。"},{"snav":"岗位要求"},{"snav":"1、大专及以上学历，7年以上相工作经验，有互联网和广告销售经验优先；"},{"snav":"2、熟悉或意愿往新媒体、广告行业发展者优先考虑；"},{"snav":"3、具备一定的策划能力、出色的沟通表达能力及人际关系处理能力；"},{"snav":"4、为人诚信、吃苦耐劳，善于沟通及整合资源，具有较强的工作抗压能力和开拓精神。"}]},
	           {"nav":"行业总监      Sales Director","subnav":[{"snav":"职位描述"},{"snav":"岗位职责"},{"snav":"1、负责上海快消行业客户；"},{"snav":"2、负责腾讯大字系列地方网站广告的销售、产品推广、市场开发，制定并达成各项销售计划；"},{"snav":"3、负责上海广告公司的谈判与开发；"},{"snav":"4、组织各环节执行人员销售政策培训，监督执行效果；"},{"snav":"5、维护公司形象，巩固与合作方的公共关系，强化合作信用，提升市场销量;"},{"snav":"6、对市场竟品动态的分析以及本产品营销计划和方案的拟定及组织实施。"},{"snav":"岗位要求"},{"snav":"1、大专及以上学历，7年以上相工作经验，有互联网和广告销售经验优先；"},{"snav":"2、熟悉或意愿往新媒体、广告行业发展者优先考虑；"},{"snav":"3、具备一定的策划能力、出色的沟通表达能力及人际关系处理能力；"},{"snav":"4、为人诚信、吃苦耐劳，善于沟通及整合资源，具有较强的工作抗压能力和开拓精神。"}]},
	             {"nav":"前端应用程序员      Front-end Developer","subnav":[{"snav":"职位描述"},{"snav":"岗位职责"},{"snav":"1、负责上海快消行业客户；"},{"snav":"2、负责腾讯大字系列地方网站广告的销售、产品推广、市场开发，制定并达成各项销售计划；"},{"snav":"3、负责上海广告公司的谈判与开发；"},{"snav":"4、组织各环节执行人员销售政策培训，监督执行效果；"},{"snav":"5、维护公司形象，巩固与合作方的公共关系，强化合作信用，提升市场销量;"},{"snav":"6、对市场竟品动态的分析以及本产品营销计划和方案的拟定及组织实施。"},{"snav":"岗位要求"},{"snav":"1、大专及以上学历，7年以上相工作经验，有互联网和广告销售经验优先；"},{"snav":"2、熟悉或意愿往新媒体、广告行业发展者优先考虑；"},{"snav":"3、具备一定的策划能力、出色的沟通表达能力及人际关系处理能力；"},{"snav":"4、为人诚信、吃苦耐劳，善于沟通及整合资源，具有较强的工作抗压能力和开拓精神。"}]},
	             {"nav":"资深设计师      Sr.Designer","subnav":[{"snav":"职位描述"},{"snav":"岗位职责"},{"snav":"1、负责上海快消行业客户；"},{"snav":"2、负责腾讯大字系列地方网站广告的销售、产品推广、市场开发，制定并达成各项销售计划；"},{"snav":"3、负责上海广告公司的谈判与开发；"},{"snav":"4、组织各环节执行人员销售政策培训，监督执行效果；"},{"snav":"5、维护公司形象，巩固与合作方的公共关系，强化合作信用，提升市场销量;"},{"snav":"6、对市场竟品动态的分析以及本产品营销计划和方案的拟定及组织实施。"},{"snav":"岗位要求"},{"snav":"1、大专及以上学历，7年以上相工作经验，有互联网和广告销售经验优先；"},{"snav":"2、熟悉或意愿往新媒体、广告行业发展者优先考虑；"},{"snav":"3、具备一定的策划能力、出色的沟通表达能力及人际关系处理能力；"},{"snav":"4、为人诚信、吃苦耐劳，善于沟通及整合资源，具有较强的工作抗压能力和开拓精神。"}]},
	             {"nav":"SEM总监      SEM Director","subnav":[{"snav":"职位描述"},{"snav":"岗位职责"},{"snav":"1、负责上海快消行业客户；"},{"snav":"2、负责腾讯大字系列地方网站广告的销售、产品推广、市场开发，制定并达成各项销售计划；"},{"snav":"3、负责上海广告公司的谈判与开发；"},{"snav":"4、组织各环节执行人员销售政策培训，监督执行效果；"},{"snav":"5、维护公司形象，巩固与合作方的公共关系，强化合作信用，提升市场销量;"},{"snav":"6、对市场竟品动态的分析以及本产品营销计划和方案的拟定及组织实施。"},{"snav":"岗位要求"},{"snav":"1、大专及以上学历，7年以上相工作经验，有互联网和广告销售经验优先；"},{"snav":"2、熟悉或意愿往新媒体、广告行业发展者优先考虑；"},{"snav":"3、具备一定的策划能力、出色的沟通表达能力及人际关系处理能力；"},{"snav":"4、为人诚信、吃苦耐劳，善于沟通及整合资源，具有较强的工作抗压能力和开拓精神。"}]},
	             {"nav":"前端开发工程师      Front-end Developer","subnav":[{"snav":"职位描述"},{"snav":"岗位职责"},{"snav":"1、负责上海快消行业客户；"},{"snav":"2、负责腾讯大字系列地方网站广告的销售、产品推广、市场开发，制定并达成各项销售计划；"},{"snav":"3、负责上海广告公司的谈判与开发；"},{"snav":"4、组织各环节执行人员销售政策培训，监督执行效果；"},{"snav":"5、维护公司形象，巩固与合作方的公共关系，强化合作信用，提升市场销量;"},{"snav":"6、对市场竟品动态的分析以及本产品营销计划和方案的拟定及组织实施。"},{"snav":"岗位要求"},{"snav":"1、大专及以上学历，7年以上相工作经验，有互联网和广告销售经验优先；"},{"snav":"2、熟悉或意愿往新媒体、广告行业发展者优先考虑；"},{"snav":"3、具备一定的策划能力、出色的沟通表达能力及人际关系处理能力；"},{"snav":"4、为人诚信、吃苦耐劳，善于沟通及整合资源，具有较强的工作抗压能力和开拓精神。"}]},
	             {"nav":"资深文案      Sr.Copywriter","subnav":[{"snav":"职位描述"},{"snav":"岗位职责"},{"snav":"1、负责上海快消行业客户；"},{"snav":"2、负责腾讯大字系列地方网站广告的销售、产品推广、市场开发，制定并达成各项销售计划；"},{"snav":"3、负责上海广告公司的谈判与开发；"},{"snav":"4、组织各环节执行人员销售政策培训，监督执行效果；"},{"snav":"5、维护公司形象，巩固与合作方的公共关系，强化合作信用，提升市场销量;"},{"snav":"6、对市场竟品动态的分析以及本产品营销计划和方案的拟定及组织实施。"},{"snav":"岗位要求"},{"snav":"1、大专及以上学历，7年以上相工作经验，有互联网和广告销售经验优先；"},{"snav":"2、熟悉或意愿往新媒体、广告行业发展者优先考虑；"},{"snav":"3、具备一定的策划能力、出色的沟通表达能力及人际关系处理能力；"},{"snav":"4、为人诚信、吃苦耐劳，善于沟通及整合资源，具有较强的工作抗压能力和开拓精神。"}]},
	             {"nav":"互动技术经理 Interactive Technology Manager","subnav":[{"snav":"职位描述"},{"snav":"岗位职责"},{"snav":"1、负责上海快消行业客户；"},{"snav":"2、负责腾讯大字系列地方网站广告的销售、产品推广、市场开发，制定并达成各项销售计划；"},{"snav":"3、负责上海广告公司的谈判与开发；"},{"snav":"4、组织各环节执行人员销售政策培训，监督执行效果；"},{"snav":"5、维护公司形象，巩固与合作方的公共关系，强化合作信用，提升市场销量;"},{"snav":"6、对市场竟品动态的分析以及本产品营销计划和方案的拟定及组织实施。"},{"snav":"岗位要求"},{"snav":"1、大专及以上学历，7年以上相工作经验，有互联网和广告销售经验优先；"},{"snav":"2、熟悉或意愿往新媒体、广告行业发展者优先考虑；"},{"snav":"3、具备一定的策划能力、出色的沟通表达能力及人际关系处理能力；"},{"snav":"4、为人诚信、吃苦耐劳，善于沟通及整合资源，具有较强的工作抗压能力和开拓精神。"}]},
	             {"nav":"前端高经工程师","subnav":[{"snav":"职位描述"},{"snav":"岗位职责"},{"snav":"1、负责上海快消行业客户；"},{"snav":"2、负责腾讯大字系列地方网站广告的销售、产品推广、市场开发，制定并达成各项销售计划；"},{"snav":"3、负责上海广告公司的谈判与开发；"},{"snav":"4、组织各环节执行人员销售政策培训，监督执行效果；"},{"snav":"5、维护公司形象，巩固与合作方的公共关系，强化合作信用，提升市场销量;"},{"snav":"6、对市场竟品动态的分析以及本产品营销计划和方案的拟定及组织实施。"},{"snav":"岗位要求"},{"snav":"1、大专及以上学历，7年以上相工作经验，有互联网和广告销售经验优先；"},{"snav":"2、熟悉或意愿往新媒体、广告行业发展者优先考虑；"},{"snav":"3、具备一定的策划能力、出色的沟通表达能力及人际关系处理能力；"},{"snav":"4、为人诚信、吃苦耐劳，善于沟通及整合资源，具有较强的工作抗压能力和开拓精神。"}]}
		]
		$scope.isshow=function(e){
			$scope.index=e
		}
		
		$scope.aa=true
		$scope.a=function(e){
			$scope.jgr=e;
			$scope.aa=true
			$scope.bb=false	
		}
		$scope.b=function(e){
			$scope.jgr=e;
			$scope.aa=false
			$scope.bb=true
		}
		
		
		var new_off=true;
	    $('.arrow').click(function(){
	    	if(new_off==true){
	    		$('.hire_footer').animate({bottom: '-230px'}, "slow");
	    		$('#arrow_down').css({
	    			display:'none'
	    		});
	    		$('#arrow_up').css({
	    			display:'block'
	    		});
	    		new_off=false;
	    	}else{
	    		$('.hire_footer').animate({bottom: '0px'}, "slow");
	    		$('#arrow_down').css({
	    			display:'block'
	    		});
	    		$('#arrow_up').css({
	    			display:'none'
	    		});
	    		new_off=true;
	    	}
	    	
	    })
	    
//	    $(function(){
//	    	$(".footer_bg li").not(":first").hover(
//			  function () {
//			    $(this).addClass("active");
//			    //alert($("this").length); //看看是否定位到了元素 如果值为0 那么表示未定位到
//			  },
//			  function () {
//			    $(this).removeClass("active");
//			  }
//			);
//	    })
	   $scope.ee=true
		$scope.c=function(){
			$scope.cc=true
			$scope.dd=false
			$scope.ee=false
			$scope.ff=false
		}
		
		$scope.d=function(){
			$scope.cc=false
			$scope.dd=true
			$scope.ee=false
			$scope.ff=false
		}
		
		$scope.e=function(){
			$scope.cc=false
			$scope.dd=false
			$scope.ee=true
			$scope.ff=false
		}
		
		$scope.f=function(){
			$scope.cc=false
			$scope.dd=false
			$scope.ee=false
			$scope.ff=true
		}
		
   
// 		$('.job').click(function(){
// 			$('.job_content').show();
// 		})
// 		
// 		$('.city').click(function(){
// 			$('.job_content').hide();
// 		})
// 		
// 		$('.country').click(function(){
// 			$('.job_content').hide();
// 		})
   
   
   
  });


