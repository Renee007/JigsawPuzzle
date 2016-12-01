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
	$("#light").hide();
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

		$("#light").show();


	})
	$("[alt]").click(function() {
		var clickPic = $(this);
		var pic0 = $("#pic0");
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

	})
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
	$(document).keydown(function(event) {
		// var e = event || window.event || arguements.callee.caller.arguements[0];
		// var light = document.getElementById("light");
		// var pic0 = document.getElementById("pic0");
		// var moveit = document.getElementById("pic" + move);

		// if (e && e.keyCode == 37 && parseInt(light.style.left) > 0) {
		// 	light.style.left = (parseInt(light.style.left) - 154) + "px";
		// } else if (e && e.keyCode == 38 && parseInt(light.style.top) > 0) {
		// 	light.style.top = (parseInt(light.style.top) - 154) + "px";
		// } else if (e && e.keyCode == 39 && parseInt(light.style.left) < 308) {
		// 	light.style.left = (parseInt(light.style.left) + 154) + "px";
		// } else if (e && e.keyCode == 40 && parseInt(light.style.top) < 308) {
		// 	light.style.top = (parseInt(light.style.top) + 154) + "px";
		// } else if (e && e.keyCode == 13 && (!(light.style.left == pic0.style.left && light.style.top == pic0.style.top))) {
		// 	if (judgeBlink) lightBlink();
		// 	for (var i = 0; i < 9; i++)
		// 		if ((document.getElementById("pic" + [i]).style.left == light.style.left) &&
		// 			(document.getElementById("pic" + [i]).style.top == light.style.top))
		// 			move = i;

		// } else if (e && e.keyCode == 13 &&
		// 	(light.style.left == pic0.style.left && light.style.top == pic0.style.top) &&
		// 	((moveit.style.left == pic0.style.left && Math.abs(parseInt(moveit.style.top) - parseInt(pic0.style.top)) == 154) ||
		// 		(moveit.style.top == pic0.style.top && Math.abs(parseInt(moveit.style.left) - parseInt(pic0.style.left)) == 154))

		// ) {

		// 	clearInterval(lightBlin);

		// 	document.getElementById("light").style.boxShadow = "0px 0px 10px #FF0000";
		// 	if (!judgeBlink) {
		// 		judge_Position("pic" + move);
		// 	}

		// 	judgeBlink = true;
		// }
		var light = $("#light");
		var pic0 = $("#pic0");
		var temp;
		if (event.keyCode == 37 && (light.offset().left ==154||light.offset().left ==308)) {
			light.animate({
				left: '-=154'
			});
		} else if (event.keyCode == 39 && (light.offset().left ==0||light.offset().left ==154)) {
			light.animate({
				left: '+=154'
			});
		} else if (event.keyCode == 38 && (light.offset().top ==154||light.offset().top ==308)) {
			light.animate({
				top: '-=154'
			});
		} else if (event.keyCode == 40 && (light.offset().top ==0||light.offset().top ==154)){
			light.animate({
				top: '+=154'
			});
		} else if (event.keyCode == 13 && light.offset() != pic0.offset()) {
			var i = 0;
			while (i < 9) {
				if (light.offset() == $("#" + "pic" + i).offset()) {move = i;break;}i++;
			}
			temp = setInterval(function() {
				light.toggle()
			}, 300);
		} else if (event.keyCode == 13 &&
			light.offset().left == pic0.offset().left &&
			abs(light.offset().top - pic0.offset().top) == 154 )
			clearInterval(temp);
	})
})
var move;