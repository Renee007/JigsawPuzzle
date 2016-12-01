//定义图片位置
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

onload = function() {


	for (var j = 0; j < pic_Style.length; j++) {
		var k = 0;
		document.getElementById("pic" + j).style.left = pic_Style[j][k];
		document.getElementById("pic" + j).style.top = pic_Style[j][k + 1];
	}
	document.getElementById("light").style.left = 154;
	document.getElementById("light").style.top = 154;

	//点击图片跳到judge_Position
	for (var i = 1; i < 9; i++) {
		document.getElementById("pic" + i).onclick = function(e) {
			judge_Position(e.currentTarget.id);
		}
	}

	document.getElementById("judge").onclick = judge_FinalPosition;
	document.getElementById("change").onclick = judge_Posibility;


	//判断图片是否可以移动并移动
	function judge_Position(num) {
		var _num = document.getElementById(num).getBoundingClientRect();
		var _blank = pic0.getBoundingClientRect();
		if ((_num.left == _blank.left && Math.abs(_num.top - _blank.top) == 154) ||
			(_num.top == _blank.top && Math.abs(_num.left - _blank.left) == 154)) {
			const nump = document.getElementById(num);
			const pic0 = document.getElementById("pic0");
			var NUMPTop = parseFloat(document.getElementById(num).style.top);
			var PIC0Top = parseFloat(document.getElementById("pic0").style.top);
			var NUMPLEFT = parseFloat(document.getElementById(num).style.left);
			var PIC0LEFT = parseFloat(document.getElementById("pic0").style.left);

			if (nump.style.left == pic0.style.left) {

				timesRun = 0;
				interval = setInterval(
					changeTop, 10, num, NUMPTop, PIC0Top, NUMPLEFT, PIC0LEFT);

			} else if (nump.style.top == pic0.style.top) {

				timesRun = 0;
				interval = setInterval(
					changeLeft, 10, num, NUMPTop, PIC0Top, NUMPLEFT, PIC0LEFT);
			}

		}
	}



	//移动点击的图片与空白图片的位置


	function changeTop(num, NUMPTop, PIC0Top, NUMPLEFT, PIC0LEFT) {
		var nump = document.getElementById(num);
		var pic0 = document.getElementById("pic0");
		const DISTANCE = 154 / 10;
		timesRun += 1;
		if (timesRun == 10) {
			clearInterval(interval);
		}
		if (NUMPTop > PIC0Top) {
			nump.style.top = (parseFloat(nump.style.top) - DISTANCE) + "px";
			pic0.style.top = (parseFloat(pic0.style.top) + DISTANCE) + "px";
		} else if (NUMPTop < PIC0Top) {
			nump.style.top = (parseFloat(nump.style.top) + DISTANCE) + "px";
			pic0.style.top = (parseFloat(pic0.style.top) - DISTANCE) + "px";
		}

	}

	function changeLeft(num, NUMPTop, PIC0Top, NUMPLEFT, PIC0LEFT) {
		var nump = document.getElementById(num);
		var pic0 = document.getElementById("pic0");
		const DISTANCE = 154 / 10;
		timesRun += 1;
		if (timesRun == 10) {
			clearInterval(interval);
		}
		if (NUMPLEFT > PIC0LEFT) {
			nump.style.left = (parseFloat(nump.style.left) - DISTANCE) + "px";
			pic0.style.left = (parseFloat(pic0.style.left) + DISTANCE) + "px";
		} else if (NUMPLEFT < PIC0LEFT) {
			nump.style.left = (parseFloat(nump.style.left) + DISTANCE) + "px";
			pic0.style.left = (parseFloat(pic0.style.left) - DISTANCE) + "px";
		}
	}



//判断图片是否回到原位
function judge_FinalPosition() {

	for (var j = 0; j < pic_Style.length; j++) {
		var k = 0;
		if (
			document.getElementById("pic" + j).style.left != pic_Style[j][k] + "px" ||
			document.getElementById("pic" + j).style.top != pic_Style[j][k + 1] + "px"
		) {
			alert("please check!");
			return false;
			//break;
		}
	}
	alert("success!");

}


//判断乱序后的图片时候能拼回原图
function judge_Posibility() {
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
	var i = 0;
	var j = 0;
	var k = 0;
	while (i < pic_Id.length) {
		var x = document.getElementById("pic" + pic_Id[i])
		x.style.left = pic_Style[j][k];
		x.style.top = pic_Style[j][k + 1];
		i++;
		j++;

		document.getElementById("light").style.boxShadow = "0px 0px 10px #FF0000";
	}
	//闪烁效果

	function lightBlink() {
		var count = 0;
		judgeBlink = false;
		lightBlin = setInterval(function() {
			if (count % 2 == 0) document.getElementById("light").style.boxShadow = "";
			else document.getElementById("light").style.boxShadow = "0px 0px 10px #FF0000";
			count++;
		}, 300);
	}
	//键盘控制
	document.onkeydown = function(event) {
		var e = event || window.event || arguements.callee.caller.arguements[0];
		var light = document.getElementById("light");
		var pic0 = document.getElementById("pic0");
		var moveit = document.getElementById("pic" + move);

		if (e && e.keyCode == 37 && parseInt(light.style.left) > 0) {
			light.style.left = (parseInt(light.style.left) - 154) + "px";
		} else if (e && e.keyCode == 38 && parseInt(light.style.top) > 0) {
			light.style.top = (parseInt(light.style.top) - 154) + "px";
		} else if (e && e.keyCode == 39 && parseInt(light.style.left) < 308) {
			light.style.left = (parseInt(light.style.left) + 154) + "px";
		} else if (e && e.keyCode == 40 && parseInt(light.style.top) < 308) {
			light.style.top = (parseInt(light.style.top) + 154) + "px";
		} else if (e && e.keyCode == 13 && (!(light.style.left == pic0.style.left && light.style.top == pic0.style.top))) {
			if (judgeBlink) lightBlink();
			for (var i = 0; i < 9; i++)
				if ((document.getElementById("pic" + [i]).style.left == light.style.left) &&
					(document.getElementById("pic" + [i]).style.top == light.style.top))
					move = i;

		} else if (e && e.keyCode == 13 &&
			(light.style.left == pic0.style.left && light.style.top == pic0.style.top) &&
			((moveit.style.left == pic0.style.left && Math.abs(parseInt(moveit.style.top) - parseInt(pic0.style.top)) == 154) ||
				(moveit.style.top == pic0.style.top && Math.abs(parseInt(moveit.style.left) - parseInt(pic0.style.left)) == 154))

		) {

			clearInterval(lightBlin);

			document.getElementById("light").style.boxShadow = "0px 0px 10px #FF0000";
			if (!judgeBlink) {
				judge_Position("pic" + move);
			}

			judgeBlink = true;
		}
	}

}

}
var move;
var judgeBlink = true;