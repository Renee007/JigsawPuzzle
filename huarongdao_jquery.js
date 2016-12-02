var pic_Style = [
		[308, 308],
		[0, 0],
		[154, 0],
		[308, 0],
		[0, 154],
		[154, 154],
		[308, 154],
		[0, 308],
		[154, 308]
	]
	// $.noConflict();
jQuery(document).ready(function($) {
	$("#change").click(function() {
		var pic_Id = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8);


		do {
			pic_Id.sort(function(a, b) {
				return Math.random() - .5
			});
			var totalNum = 0;
			var number1 = pic_Id;
			var number2 = pic_Id;
			for (var i = 0; i < number1.length; i++) {
				for (var j = 0; j < number2.length; j++) {
					if ((number1[i] - number2[j]) * (i - j) < 0)

						totalNum = totalNum + 1;
				}
			}
		}
		while (totalNum % 2 != 0 && totalNum != 0)

		var j = 0;
		var k = 0;
		while (j < pic_Id.length) {

			$("#" + "pic" + pic_Id[j]).offset({
				left: pic_Style[j][k],
				top: pic_Style[j][k + 1]
			});

			j++;
		}

		$("#light").addClass("shadow");


	})
	$("[alt]").click(function() {
		var clickPic = $(this);
		var pic0 = $("#pic0");
		changPosition(clickPic, pic0);

	})

	function changPosition(clickPic, pic0) {
		if (clickPic.offset().left == pic0.offset().left && (clickPic.offset().top - pic0.offset().top) == 154) {
			clickPic.animate({
				top: '-=154'
			});
			pic0.animate({
				top: '+=154'
			});
		} else if (clickPic.offset().left == pic0.offset().left && (clickPic.offset().top - pic0.offset().top) == -154) {
			clickPic.animate({
				top: '+=154'
			});
			pic0.animate({
				top: '-=154'
			});
		} else if (clickPic.offset().top == pic0.offset().top && (clickPic.offset().left - pic0.offset().left) == 154) {
			clickPic.animate({
				left: '-=154'
			});
			pic0.animate({
				left: '+=154'
			});
		} else if (clickPic.offset().top == pic0.offset().top && (clickPic.offset().left - pic0.offset().left) == -154) {
			clickPic.animate({
				left: '+=154'
			});
			pic0.animate({
				left: '-=154'
			});
		}
	}
	$("#judge").click(function() {
		for (var j = 0; j < pic_Style.length; j++) {
			var k = 0;
			if (
				($("#" + "pic" + j).offset().left != pic_Style[j][k]) ||
				($("#" + "pic" + j).offset().top != pic_Style[j][k + 1])
			) {
				alert("please check!");
				return false;
				//break;
			}
		}
		alert("success!");
	})

	function lightBlink() {
		var light = $("#light");

		judgeBlink = false;
		temp = setInterval(function() {
			light.toggleClass("shadow");
		}, 300);
	}
	$(document).keydown(function(event) {

		var light = $("#light");
		var pic0 = $("#pic0");
		if (event.keyCode == 37 && (light.offset().left == 154 || light.offset().left == 308)) {
			light.animate({
				left: '-=154'
			});
		} else if (event.keyCode == 39 && (light.offset().left == 0 || light.offset().left == 154)) {
			light.animate({
				left: '+=154'
			});
		} else if (event.keyCode == 38 && (light.offset().top == 154 || light.offset().top == 308)) {
			light.animate({
				top: '-=154'
			});
		} else if (event.keyCode == 40 && (light.offset().top == 0 || light.offset().top == 154)) {
			light.animate({
				top: '+=154'
			});
		} else if (event.keyCode == 13 && light.offset().left != pic0.offset().left || light.offset().top != pic0.offset().top) {
			var i = 0;
			while (i < 9) {
				if (light.offset().top == $("#" + "pic" + i).offset().top &&
					light.offset().left == $("#" + "pic" + i).offset().left) {
					move = i;
					break;
				}
				i++;
			}
			if (judgeBlink) {
				lightBlink();
			}

		} else if (event.keyCode == 13 &&
			light.offset().left == pic0.offset().left &&
			light.offset().top == pic0.offset().top) {
			clearInterval(temp);
			light.addClass("shadow");
			var moveit = $("#" + "pic" + move);
			changPosition(moveit, pic0);
			judgeBlink = true;
		}
	})
})
var move;
var judgeBlink = true;
var temp;