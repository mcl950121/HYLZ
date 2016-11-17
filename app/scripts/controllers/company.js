'use strict';

/**
 * @ngdoc function
 * @name yoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoApp
 */
angular.module('yoApp').controller('company', function () {
	var t
	function a() {
		document.getElementById("t").style.display = "block";
		clearInterval(t);
		t = setInterval(b, 200)
	}
	t = setInterval(a, 1000)
	function b() {
		document.getElementById("t2").style.display = "block";
		clearInterval(t);
		t = setInterval(c, 200)
	}
	function c() {
		document.getElementById("t3").style.display = "block";
		clearInterval(t);
		t = setInterval(d, 200)
	}
	function d() {
		document.getElementById("t4").style.display = "block";
		clearInterval(t);
		t = setInterval(e, 200)
	}
	function e() {
		document.getElementById("t5").style.display = "block";
		clearInterval(t);
		t = setInterval(f, 200)
	}

	function f() {
		document.getElementById("t6").style.display = "block";
		clearInterval(t);
		t = setInterval(g, 200)
	}

	function g() {
		document.getElementById("t8").style.display = "block";
		clearInterval(t);
		t = setInterval(h, 200)
	}
	function h() {
		document.getElementById("t9").style.display = "block";
		clearInterval(t);
		t = setInterval(i, 200)
	}
	function i() {
		document.getElementById("t10").style.display = "block";
		clearInterval(t);
		t = setInterval(j, 200)
	}
	function j() {
		document.getElementById("t11").style.display = "block";
		clearInterval(t);
	}
	
	
});



